import * as React from 'react'
import './index.css'
const Seperator: React.FC<{ orientation: 'horizontal' | 'vertical' }> = ({ orientation }) => (
  <div className={`seperator seperator-${orientation}`}></div>
)

export default Seperator
