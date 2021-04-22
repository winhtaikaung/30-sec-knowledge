import * as React from 'react'

import './index.css'

import { SettingPickerContext } from '../../App'
import { FontSize } from '../../enum'

const OptionRange: React.FC = () => {
  const { setting, setSetting } = React.useContext(SettingPickerContext)
  const [range, setRange] = React.useState(1)
  React.useEffect(() => {
    setRange(setting.fontSize)
  }, [setting.fontSize])

  return (
    <>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setting.fontSize = (e.target.value as any) as FontSize
          setRange(setting.fontSize)
          if (setSetting) {
            setSetting(setting)
          }
        }}
        className="option-range-fontscale"
        type="range"
        min="1"
        max="6"
        step="1"
        value={range}
      />
    </>
  )
}

export default OptionRange
