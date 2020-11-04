import React, { Component} from 'react'
import SidebarSupCategory from './SidebarSupCategory'
import SidebarSubCategory from './SidebarSubCategory'

export default class SidebarCategory extends Component {
    state = {
        isOpen: false,
        cat_infos: this.props.category
    }

    toggleSidebar = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }
//subcategories
    render() {
        if(this.state.cat_infos['hide_flag'] === 0) {
            return <div className="sidebar-category">
                <div className="sidebar-super-category" onClick={this.toggleSidebar}>
                    <SidebarSupCategory c_subject={this.state.cat_infos['c_subject']}/>
                </div>
                <div>
                    <SidebarSubCategory
                        isOpen={this.state.isOpen}
                        subcategories={this.state.cat_infos.subcategories}
                    />
                </div>
            </div>
        }
        else {
            return ;
        }
            
    }
}