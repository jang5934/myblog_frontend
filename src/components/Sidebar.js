import React, { Component } from 'react'
import SidebarIcon from './SidebarIcon'
import SidebarContent from './SidebarContent'

export default class Sidebar extends Component {
    state = {
        isOpen: true
    }

    toggleSidebar = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
    
    render() {
        return <div className="sidebar-container">
                <SidebarContent isOpen={this.state.isOpen} />
            <div className="sidebar-icon">
                <SidebarIcon
                    isOpen={this.state.isOpen}
                    handleClick={this.toggleSidebar}
                />
            </div>
        </div>
    }
}