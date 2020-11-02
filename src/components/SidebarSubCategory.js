import React, { Component } from 'react'
import { Transition } from 'react-transition-group'

const duration = 100
const sidebarStyle = {
    transition: `height ${duration}ms`
}
const sidebarTransitionStyles = {
    entering: { height: '40px' },
    entered: { height: '200px' },
    exiting: { height: '200px' },
    exited: { height: '40px' }
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
                    <div className="sidebar-link">Sub1</div>
                    <div className="sidebar-link">Sub2</div>
                    <div className="sidebar-link">Sub3</div>
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