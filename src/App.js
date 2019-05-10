import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactsPage from "./pages/contacts";
import PostsPage from "./pages/posts";
import "bootstrap/dist/css/bootstrap.css";
import PostDetail from "./pages/posts/PostDetail";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
