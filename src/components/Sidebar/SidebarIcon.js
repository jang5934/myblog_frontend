import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const SidebarIcon = ({handleClick, isOpen}) => {
  return <span onClick={handleClick}>
    {isOpen ? <FaTimes size ="40px"/> : <FaBars size ="40px"/>}
  </span>
}
export default SidebarIcon