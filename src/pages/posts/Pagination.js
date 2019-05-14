import React from 'react';


export default function Pagination(props){
    let pagerItem = [];
    let pageCount = props.pagerNumber / 10;

    for(let i=1;i<=pageCount;i++){
        pagerItem.push(
            <li className="page-item" key={i}>
                <span className="page-link" onClick={(currentPage) => {props.onChangeCurrentPage(i)}}>{i}</span>
            </li>
        )
    }
    return pagerItem;
}