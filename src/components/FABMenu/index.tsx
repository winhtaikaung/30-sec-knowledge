import * as React from 'react'
import { useHistory } from 'react-router-dom'
import ToolTip from '../ToolTip'
import './index.css'
import iconMenu from './menu_icon.svg'
import iconHome from './home_icon.svg'
import iconSettings from './settings_icon.svg'
import iconRestart from './restart_icon.svg'
import { clearStorage } from '../../utils/storage'

const FabMenu: React.FC = () => {
  const { replace, go } = useHistory()

  return (
    <>
      <input id="fabButton" className="fabButton" type="checkbox" />
      <label htmlFor="fabButton">
        <img alt="menu" src={iconMenu} />
      </label>

      <div
        className="one button tooltip"
        onClick={() => {
          clearStorage()
          replace('/setting')
          go(0)
        }}
      >
        <img alt="saved-snippets" src={iconRestart} />
        <ToolTip text="Reset" />
      </div>

      <div
        className="two button tooltip"
        onClick={() => {
          replace('/setting')
        }}
      >
        <img alt="settings" src={iconSettings} />
        <ToolTip text="Settings" />
      </div>
      <div
        className="three button tooltip"
        onClick={() => {
          replace('/home')
          go(0)
        }}
      >
        <img alt="home" src={iconHome} />
        <ToolTip text="Home" />
      </div>
    </>
  )
}
export default FabMenu
