import * as React from 'react'

import './index.css'
import square from './square.svg'
import checkedSquare from './checked-square.svg'
import { SettingPickerContext } from '../../App'

const OptionSwitch: React.FC = () => {
  const { setting, setSetting } = React.useContext(SettingPickerContext)
  const [checked, setChecked] = React.useState(false)
  React.useEffect(() => {
    setChecked(setting.theme === 'light')
  }, [setting.theme])

  return (
    <>
      <span
        className={`option-switch option-switch-${setting.theme === 'light' ? 'checked' : 'unchecked'}`}
        onClick={() => {
          setChecked(!checked)

          setting.theme = setting.theme === 'light' ? 'dark' : 'light'

          if (setSetting) {
            setSetting(setting)
          }
        }}
      ></span>
      Theme: {setting.theme}
    </>
  )
}

export default OptionSwitch
