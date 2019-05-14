import React, {Component} from 'react';
import PostList from "./PostList";
import Pagination from "./Pagination"
import "./style.css";

class Posts extends Component {
    state = {
        pagerNumber: null,
        siteUrl: "https://www.idealflatmate.co.uk/landlord-HQ/",
        postsUrl: "wp-json/wp/v2/posts",
        postsPagemarker: "",
        postList: []
    }

    componentWillMount(nextProps, nextState, nextContext) {
        this.getNewData();
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                <PostList postList = {this.state.postList} pageNumber = {this.getPagerNumber} />
                <ul className="pagination">
                    <Pagination onChangeCurrentPage = {this.handleChangeCurrentPage} pagerNumber = {this.state.pagerNumber} />
                </ul>
            </div>
        );
    }

    getNewData = (postsPagemarker = 'page=1') => {
        let that = this;
        const {siteUrl, postsUrl} = this.state;

        fetch(siteUrl + postsUrl + '?' + postsPagemarker).then((response) => {
            that.getPagerNumber(response.headers.get("x-wp-total"))
            return response.json();
        }).then(responseBody => {
            this.setState({
                postList: responseBody
            })
        })
    }

    handleChangeCurrentPage = (currentPage)=> {
        this.setState({
            postsPagemarker: "page=" + currentPage
        });

        this.getNewData("page=" + currentPage);
        window.history.pushState({postPageIndex: 'postPageIndex-'.currentPage}, "postPage", "?page=".currentPage);
    }

    getPagerNumber = (number) => {
        this.setState({
            pagerNumber: number
        })
    }
}

export default Posts;