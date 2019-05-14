import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactsPage from "./pages/contacts";
import PostsPage from "./pages/posts";
import PostDetail from "./pages/posts/PostDetail";
import Login from "./auth/Login";
import Logout from "./auth/Logout";

import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
    constructor(props){
        super(props);
        this.setUserName = this.setUserName.bind(this);
        this.getUserName = this.getUserName.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    setUserName(newUserName) {
        localStorage.setItem('myAppUserName', newUserName);
        this.userName = newUserName;
    }
    getUserName(){ return localStorage.getItem('myAppUserName') }

    handleLogout() {
        localStorage.removeItem('myAppUserName');
        this.forceUpdate();
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a className="navbar-brand" href="/">ReactBlog</a>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/posts">Posts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contacts">Contacts</a>
                                </li>
                            </ul>
                            {this.getUserName() ? <Logout onHandleLogout = {this.handleLogout} userName={this.getUserName()} /> : <Login onGetUser = {this.setUserName} /> }
                        </div>
                    </nav>


                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path={"/about"} component={AboutPage}/>
                    <Route exact path={"/contacts"} component={ContactsPage}/>
                    <Route path={"/posts"} component={PostsPage}/>
                    <Route exact path={`/post-details/:postId`} component={PostDetail}></Route>

                </Router>
            </div>
        )
    }
};

export default App;
