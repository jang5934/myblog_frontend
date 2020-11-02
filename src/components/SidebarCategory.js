import React, { Component } from 'react'
import SidebarSupCategory from './SidebarSupCategory'
import SidebarSubCategory from './SidebarSubCategory'

export default class SidebarCategory extends Component {
    state = {
        isOpen: false
    }

    toggleSidebar = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
    
    render() {
        return <div className="sidebar-category">
            <div className="sidebar-super-category" onClick={this.toggleSidebar}>
                <SidebarSupCategory name="temp"/>
            </div>
            <div className="sidebar-sub-category">
                <SidebarSubCategory isOpen={this.state.isOpen}/>
            </div>
        </div>
    }
}