import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import SidebarCategory from './SidebarCategory/SidebarCategory'
import Axios from 'axios'

const duration = 250
const sidebarStyle = {
    transition: `width ${duration}ms`
}
const sidebarTransitionStyles = {
    entering: { width: '40px' },
    entered: { width: '200px' },
    exiting: { width: '200px' },
    exited: { width: '40px' }
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

export default class SidebarContent extends Component {
    state = {
        categories: ""
    }

    async componentDidMount() {
        const apiUrl = '/blog/allCategories'

        const instance = Axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 3000,
            // headers: {},
        })

        try {
            const response = await instance.get(apiUrl)
            this.setState({
                categories: response
            })
        } catch (error) {
            console.error(error)
        }
    }

    createCategory = () => {
        const categories = []

        if (this.state.categories !== "") {
            this.state.categories.data.forEach(
                (cat) => categories.push(<SidebarCategory category={cat} />)
            )
        }
        return categories
    }

    renderCategory = () => {
        return <Transition in={this.props.isOpen} timeout={duration}>
            {(state) => (
                <div style={{
                    ...linkStyle,
                    ...linkTransitionStyles[state]
                }}>
                    {this.createCategory()}
                </div>
            )}
        </Transition>
    }

    render() {
        return <Transition in={this.props.isOpen} timeout={duration}>
            {(state) => (
                <div className="sidebar" style={{
                    ...sidebarStyle,
                    ...sidebarTransitionStyles[state]
                }}>
                    {this.renderCategory()}
                </div>
            )}
        </Transition>
    }
}