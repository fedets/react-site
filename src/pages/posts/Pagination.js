import React, {Component} from 'react';

class Pagination extends Component {
    state = {
        pager: []
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if(this.props === nextProps){ return; }
        let pagesNumber = Math.ceil(this.props.pagerNumber / 10);
        let pagerItem = [];

        for(let i=1;i<=pagesNumber;i++) {
            pagerItem.push(
                <li className="page-item" key={i}>
                    <span onClick={ currentPage => {this.props.onCurrentPageChange(i);}} className="page-link">{i}</span>
                </li>
            )
        }
        this.setState({
            pager: pagerItem
        })
    }

    render() {

        return (
            <ul className="pagination">
                {this.state.pager}
            </ul>
        );
    }
}

export default Pagination;