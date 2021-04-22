import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import SnippetView from './container/SnippetView'
import SettingView from './container/SettingView'
import { getOptions } from './data/options'
import { FontSize } from './enum'
import { getStorage, setStorage, SETTING_STORAGE } from './utils/storage'
import { isEmpty } from './utils/misc'

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

function App() {
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
  }, [bufferedSetting])

  return (
    <div className="App">
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
          },
        }}
      >
        <Router>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <SettingView />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/setting`}>
              <SnippetView />
            </Route>
          </Switch>
        </Router>
      </SettingPickerContext.Provider>
    </div>
  )
}

export default App
