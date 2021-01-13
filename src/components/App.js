import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { FirstPage, WritePost } from './pages';
import ViewPost from './ViewPost/ViewPost';
import Sidebar from './Sidebar/Sidebar';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Sidebar/>
                <Route exact path="/" component={FirstPage}/>
                <Route path="/read/:scid" component={ViewPost}/>
                <Route path="/write" component={WritePost}/>
            </div>
        )
    }
}
export default App