import React, {Component} from 'react';
import PostItem from "./PostItem";

class PostList extends Component {
    state = {
        siteUrl: "https://www.idealflatmate.co.uk/landlord-HQ/",
        postsUrl: "wp-json/wp/v2/posts",
        postList: []
    }

    componentWillMount() {
        let preloader
        const posts = fetch(this.state.siteUrl + this.state.postsUrl).then(function(response){
            return response.json();
        }).then(responseBody => {
            this.setState({
                postList: responseBody
            })
        })
    }

    render() {
        return (
            <div className="row">
            {this.state.postList.map((post)=> {
                    return <PostItem key={post.id} postInfo={post} />
                })}
    </div>
        );
    }
}

export default PostList;