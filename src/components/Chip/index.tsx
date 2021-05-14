import * as React from 'react'
import { UpperFirst } from '../../utils/string'
import './index.css'
const Chip: React.FC<{ category: string }> = ({ category }) => {
  return (
    <>
      <span className="newtab-contentChip">
        <span className={`chip chip-${category}`}>{UpperFirst(category)}</span>
      </span>
    </>
  )
}

export default Chip
