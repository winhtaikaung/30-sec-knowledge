import * as React from 'react'
import './index.css'
const ToolTip: React.FC<{ text: string }> = ({ children, text }) => (
  <>
    <span className="tooltiptext" data-name={text}></span>
  </>
)
export default ToolTip
