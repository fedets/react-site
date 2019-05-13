import React, {Component} from 'react';
import PostItem from "./PostItem";

class PostList extends Component {
    render() {
        return (
            <div className="row">
            {this.props.postList.map((post)=> {
                    return <PostItem key={post.id} postInfo={post} />
                })}
    </div>
        );
    }
}

export default PostList;