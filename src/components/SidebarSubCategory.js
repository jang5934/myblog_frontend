import React, { Component } from 'react'
import { Transition } from 'react-transition-group'

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
    renderLinks = () => {
        return <Transition in={this.props.isOpen} timeout={duration}>
            {(state) => (
                <div style={{
                    ...linkStyle,
                    ...linkTransitionStyles[state]
                }}>
                    <div className="sidebar-sub-category">Sub1</div>
                    <div className="sidebar-sub-category">Sub2</div>
                    <div className="sidebar-sub-category">Sub3</div>
                </div>
            )}
        </Transition>
    }

    render() {
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