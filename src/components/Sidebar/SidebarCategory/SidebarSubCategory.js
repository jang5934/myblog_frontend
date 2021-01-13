import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { Link } from 'react-router-dom'

const duration = 100
const sidebarStyle = {
    transition: `height ${duration}ms`
}
const sidebarTransitionStyles = {
    entering: { height: '0px' },
    entered: { height: '130px' },
    exiting: { height: '130px' },
    exited: { height: '0px' }
}
const linkStyle = {
    transition: `opacity ${duration}ms`
}
const linkTransitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 }
}

export default class SidebarSubCategory extends Component {
    state = {
        subcategories: this.props.subcategories
    }

    renderLinks = () => {
        const subCatStyle = {
            textDecoration: 'none',
            color: 'white',
        }

        const sub_categories = []

        this.state.subcategories.forEach(item =>
            sub_categories.push(
                <Link
                    to={`/read/${item.sc_id}`}
                    style={subCatStyle} key={item.sc_id}>
                    <div className="sidebar-sub-category">
                        {item.sc_subject}
                    </div>
                </Link>)
        )
        return <Transition in={this.props.isOpen} timeout={duration}>
            {(state) => (
                <div style={{
                    ...linkStyle,
                    ...linkTransitionStyles[state]
                }}>
                    {sub_categories}
                </div>
            )}
        </Transition>
    }

    render() {
        let size = this.state.subcategories.length * 40 + 10 + "px";

        sidebarTransitionStyles.entered = { height: size };
        sidebarTransitionStyles.exiting = { height: size };

        return <Transition in={this.props.isOpen} timeout={duration}>
            {(state) => (
                <div className="sidebar-category" style={{
                    ...sidebarStyle,
                    ...sidebarTransitionStyles[state]
                }}>
                    {this.renderLinks()}
                </div>
            )}
        </Transition>
    }
}