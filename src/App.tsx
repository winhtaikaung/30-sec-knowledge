import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import MDView from './components/MDView'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <MDView />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/setting`}>
            setting
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
