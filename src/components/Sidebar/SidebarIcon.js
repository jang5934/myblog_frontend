import React from 'react'
import icon_menu_close from '../../assets/icon_menu_close.svg'
import icon_menu_open from '../../assets/icon_menu_open.svg'

const SidebarIcon = ({ handleClick, isOpen }) => {
  return <span onClick={handleClick}>
    {isOpen ? <img src={icon_menu_close} size="30px" /> : <img src={icon_menu_open} size="30px" />}
  </span>
}
export default SidebarIcon