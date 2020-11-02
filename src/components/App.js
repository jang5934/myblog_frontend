import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    )
  }
}
export default App