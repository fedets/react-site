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
        // if(this.state == nextState) { return; }
        console.log("componentWillMount");
        this.getNewData();
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     if(this.state.postsPagemarker != nextState.postsPagemarker) {
    //         console.log("componentWillUpdate");
    //         this.getNewData();
    //     }
    // }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                <PostList postList = {this.state.postList} pageNumber = {this.getPagerNumber} />
                <Pagination onCurrentPageChange = {this.handleChangeCurrentPage} pagerNumber = {this.state.pagerNumber} />
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
        console.log("currentPage", currentPage);
        this.setState({
            postsPagemarker: "page=" + currentPage
        });

        this.getNewData("page=" + currentPage);
    }

    getPagerNumber = (number) => {
        this.setState({
            pagerNumber: number
        })
    }
}

export default Posts;