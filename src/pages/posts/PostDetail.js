import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PostDetail extends Component {
    state = {
        siteUrl: "https://www.idealflatmate.co.uk/landlord-HQ/",
        postsUrl: "/wp-json/wp/v2/posts/" + this.props.match.params.postId,
        postDetails: null
    }

    componentWillMount() {
        const posts = fetch(this.state.siteUrl + this.state.postsUrl).then(function(response){
            return response.json();
        }).then(responseBody => {
            this.setState({
                postDetails: responseBody
            },function(){
                console.log(responseBody.title.rendered);
            })
        })
    }

    render() {
        const postDetails = this.state.postDetails;
        const postTitle = postDetails && postDetails.title.rendered
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/posts">All posts</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page"></li>
                    </ol>
                </nav>

                <h1 className="text-center h3">
                    {postTitle}
                </h1>
                <div className="post-content">
                    <div dangerouslySetInnerHTML={{__html: postDetails && postDetails.content.rendered}} />
                </div>
            </div>
        );
    }
}

export default PostDetail;