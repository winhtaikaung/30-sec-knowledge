import * as React from 'react'
import './index.css'
const Chip: React.FC<{ category: string }> = ({ category }) => {
  return (
    <>
      <span className="newtab-contentChip">
        <span className={`chip chip-${category}`}>{category}</span>
      </span>
    </>
  )
}

export default Chip
