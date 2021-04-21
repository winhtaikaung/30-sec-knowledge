import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import SnippetView from './container/SnippetView'
import SettingView from './container/SettingView'
import { getOptions } from './data/options'
import { FontSize } from './enum'

export const SettingPickerContext = React.createContext<{
  setting: {
    selectedOptions: string[]
    defaultOptions: string[]
    theme: string
    fontSize: FontSize
  }
  setSetting?: React.Dispatch<
    React.SetStateAction<{
      selectedOptions: string[]
      defaultOptions: string[]
      theme: string
      fontSize: FontSize
    }>
  >
}>({
  setting: {
    selectedOptions: [],
    defaultOptions: [],
    theme: 'dark',
    fontSize: FontSize.xs,
  },
})

function App() {
  const [setting, setSetting] = React.useState({
    selectedOptions: Array<string>(0),
    defaultOptions: getOptions(),
    theme: 'dark',
    fontSize: FontSize.xs,
  })

  return (
    <div className="App">
      <SettingPickerContext.Provider
        value={{
          setting: setting,
          setSetting: setSetting,
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
