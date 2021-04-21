import * as React from 'react'
import { SettingPickerContext } from '../../App'
import OptionCheckBox from '../../components/OptionCheckBox'
import Seperator from '../../components/Seperator'
import './index.css'
const SettingView: React.FC = () => {
  const { setting } = React.useContext(SettingPickerContext)
  return (
    <>
      <div className="setting-container">
        <h2>Suprise Me</h2>
        <div className="button-orange button ">
          <div className="button-text">Open Random Snippet</div>
        </div>
        <Seperator orientation="horizontal" />
        <div className="container-horizontal">
          <div className="container-horizontal-left">
            <h2>Enabled Snippets</h2>
            {setting.defaultOptions.map((item: string, index: number) => (
              <OptionCheckBox key={item} category={item} />
            ))}
          </div>
          <Seperator orientation="vertical" />
          <div className="container-horizontal-right">
            <h2>Enabled Snippets</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingView
