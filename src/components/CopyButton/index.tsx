import * as React from 'react'
import './index.css'
import copy from './icon.svg'
const CopyButton: React.FC<{ onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }> = ({ onClick }) => (
  <div className=" copy-button" onClick={onClick}>
    <img alt="copy" src={copy} />
  </div>
)

export default CopyButton
