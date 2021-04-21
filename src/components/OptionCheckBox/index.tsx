import * as React from 'react'
import Chip from '../Chip'
import './index.css'
import square from './square.svg'
const OptionCheckBox: React.FC<{ category: string }> = ({ category }) => (
  <span className={`option-picker`}>
    <img src={square} />
    <Chip category={category}>{category}</Chip>
  </span>
)

export default OptionCheckBox
