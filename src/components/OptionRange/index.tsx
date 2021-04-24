import * as React from 'react'

import './index.css'

import { SettingPickerContext } from '../../App'
import { FontSize } from '../../enum'
export const RangeScale = {
  1: { value: FontSize.xxs, size: 'XXS' },
  2: { value: FontSize.xs, size: 'XS' },
  3: { value: FontSize.s, size: 'S' },
  4: { value: FontSize.m, size: 'M' },
  5: { value: FontSize.xl, size: 'XL' },
  6: { value: FontSize.xxl, size: 'XXL' },
}
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
      {`Size : 
      ${
        // @ts-ignore
        RangeScale[setting.fontSize].size
      }`}
    </>
  )
}

export default OptionRange
