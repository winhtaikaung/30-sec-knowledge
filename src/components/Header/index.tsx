import * as React from 'react'
import Chip from '../Chip'
import { MarkDownContext } from '../MDView'
import './index.css'
const Header: React.FC = () => {
  const { category } = React.useContext(MarkDownContext)

  return (
    <>
      <span className="newtab-contentheader">
        <Chip category={category} />
      </span>
    </>
  )
}

export default Header
