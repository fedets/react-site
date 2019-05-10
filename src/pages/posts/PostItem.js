import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import PostDetail from "./PostDetail";

class PostItem extends Component {
    componentDidMount() {
        let linksMore =document.querySelector(".link-more");
        linksMore.parentNode.removeChild(linksMore);
    }

    render() {
        const {postInfo} = this.props;
        let postDetailUrl = "/posts/post-details";

        return (

                <div className="col-sm-6 col-xs-12 mb-4">
                    <div className="card">
                        <Link to={`/post-details/${postInfo.id}`}>
                            <div className="card-body">
                                <h3 className="card-title text-14">{postInfo.title.rendered}</h3>
                                <div className="card-text">
                                    <div dangerouslySetInnerHTML={{__html: postInfo.excerpt.rendered}} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
        );
    }
}

export default PostItem;