import * as React from 'react'
import Chip from '../Chip'
import './index.css'
import square from './square.svg'
import checkedSquare from './checked-square.svg'
import { SettingPickerContext } from '../../App'

const OptionCheckBox: React.FC<{ category: string }> = ({ category }) => {
  const { setting, setSetting } = React.useContext(SettingPickerContext)
  const [checked, setChecked] = React.useState(false)
  React.useEffect(() => {
    setChecked(setting.selectedOptions.includes(category))
  }, [category, setting.selectedOptions])

  return (
    <span
      className={`option-picker option-${checked ? 'checked' : 'unchecked'}`}
      onClick={() => {
        setChecked(!checked)
        if (!checked) {
          setting.selectedOptions.push(category)
        } else {
          const index = setting.selectedOptions.indexOf(category)
          if (index > -1) {
            setting.selectedOptions.splice(index, 1)
          }
        }
        if (setSetting) {
          setSetting(setting)
        }
      }}
    >
      <img src={checked ? checkedSquare : square} alt={checkedSquare} />
      <Chip category={category}>{category}</Chip>
    </span>
  )
}

export default OptionCheckBox
