import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import logo from './logo.svg'
import SnippetView from './container/SnippetView'
import SettingView from './container/SettingView'
import { getOptions } from './data/options'
import { FontSize } from './enum'
import { getStorage, setStorage, SETTING_STORAGE } from './utils/storage'
import { isEmpty } from './utils/misc'
import SnackBarMessage from './components/SnackBar'
import FabMenu from './components/FABMenu'

type SettingObject = {
  selectedOptions: string[]
  defaultOptions: string[]
  theme: string
  fontSize: FontSize
}

export const SettingPickerContext = React.createContext<{
  setting: SettingObject
  setSetting?: (val: SettingObject) => void
  getSetting?: () => Promise<SettingObject>
}>({
  setting: {
    selectedOptions: [],
    defaultOptions: [],
    theme: 'dark',
    fontSize: FontSize.xxs,
  },
})

const App: React.FC<{ timestamp: string }> = ({ timestamp }) => {
  const [bufferedSetting, saveBufferedSetting] = React.useState({
    selectedOptions: Array<string>(0),
    defaultOptions: getOptions(),
    theme: 'dark',
    fontSize: FontSize.xxs,
  })
  React.useEffect(() => {
    const extractData = async () => {
      let storedSetting = await getStorage(SETTING_STORAGE)

      if (isEmpty(storedSetting)) {
        storedSetting = bufferedSetting

        saveBufferedSetting(storedSetting as SettingObject)
      } else {
        // @ts-ignore
        storedSetting = storedSetting[SETTING_STORAGE]
        saveBufferedSetting(storedSetting as SettingObject)
      }
    }

    extractData()
    // eslint-disable-next-line
  }, [timestamp])

  return (
    <>
      {bufferedSetting && (
        <SettingPickerContext.Provider
          value={{
            setting: bufferedSetting,
            getSetting: async () => {
              const storedSetting = await getStorage(SETTING_STORAGE)

              if (isEmpty(storedSetting)) {
                return bufferedSetting as SettingObject
              } else {
                // @ts-ignore
                return storedSetting[SETTING_STORAGE] as SettingObject
              }
            },
            setSetting: async (updatedSetting: SettingObject) => {
              saveBufferedSetting(updatedSetting)
              setStorage(SETTING_STORAGE, updatedSetting)
              const snippetContainer = document.body
              SnackBarMessage('Setting has been saved', snippetContainer)
            },
          }}
        >
          <div className={`App ${bufferedSetting.theme === 'dark' ? 'bg-black font-white' : 'bg-white font-black'}`}>
            <a
              href="https://github.com/winhtaikaung/30-sec-knowledge"
              rel="noreferrer"
              className="app-link"
              target="_blank"
            >
              <img className="app-logo" alt="appLogo" src={logo} />
            </a>
            <Router>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`}>
                  <SnippetView timestamp={new Date().toString()} />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/home`}>
                  <SnippetView timestamp={new Date().toString()} />
                </Route>
                <Route exact path={`${process.env.PUBLIC_URL}/setting`}>
                  <SettingView />
                </Route>
              </Switch>
              <FabMenu />
            </Router>
          </div>
        </SettingPickerContext.Provider>
      )}
    </>
  )
}

export default App
