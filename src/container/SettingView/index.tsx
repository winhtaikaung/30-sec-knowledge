import * as React from 'react'
import { SettingPickerContext } from '../../App'
import OptionCheckBox from '../../components/OptionCheckBox'
import OptionRange from '../../components/OptionRange'
import OptionSwitch from '../../components/OptionSwitch'
import Seperator from '../../components/Seperator'
import './index.css'
const SettingView: React.FC = () => {
  const { setting } = React.useContext(SettingPickerContext)

  return (
    <>
      <div className={`setting-container ${setting.theme === 'dark' ? 'font-white' : 'font-black'}`}>
        <h2>Suprise Me</h2>
        <div className="button-orange button ">
          <div className="button-text">Open Random Snippet</div>
        </div>
        <Seperator orientation="horizontal" />
        <div className="container-horizontal">
          <div className="container-horizontal-left">
            <h2>Enabled Snippets</h2>
            {setting.defaultOptions.map((item: string) => (
              <OptionCheckBox key={item} category={item} />
            ))}
          </div>
          <Seperator orientation="vertical" />
          <div className="container-horizontal-right">
            <h2>Dark/Light Theme</h2>
            <div className="switch-holder">
              <OptionSwitch />
            </div>
            <h2>Font Size</h2>
            <div className="option-range-holder">
              <OptionRange />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingView
