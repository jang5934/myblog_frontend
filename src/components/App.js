import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { FirstPage, ReadPost, WritePost } from './pages';
import Sidebar from './Sidebar/Sidebar';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar/>
                <Route exact path="/" component={FirstPage}/>
                <Route path="/read" component={ReadPost}/>
                <Route path="/write" component={WritePost}/>
            </div>
        )
    }
}
export default App