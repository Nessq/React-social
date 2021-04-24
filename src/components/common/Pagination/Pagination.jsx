import React from 'react';
import s from "./Pagination.module.css";

const Pagination = props => {


    let smallPagination = false
    let sizePagination = props.sizePagination >= 3 && props.sizePagination <= 15 ? props.sizePagination : 5
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    if(sizePagination*2 >= pagesCount) {
        sizePagination = pagesCount
        smallPagination = true
    }

    let pages = Array(sizePagination).fill('').map((v,i) => {
        if(smallPagination) return i+1
        return props.currentPage <= Math.floor(sizePagination / 2)
            ? i+1
            : props.currentPage <= pagesCount - Math.floor(sizePagination / 2)
                ? (props.currentPage +i) - Math.floor(sizePagination / 2)
                : (pagesCount  - sizePagination) + i+1
    })

    return (
        <div className={s.pagination}>

            {props.currentPage > Math.ceil(sizePagination / 2) && !smallPagination ?  <><span onClick={()=>props.onPageChanged(1)}>&laquo;</span><i>...</i></> : undefined}
            {
                pages.map((p) => (
                    <span
                        key={p}
                        className={props.currentPage === p ? s.active : undefined}
                        onClick={() => props.onPageChanged(p)}
                    >
                            {p}
                        </span>
                ))
            }
            {props.currentPage < pagesCount - Math.floor(sizePagination / 2) && !smallPagination ? <><i>...</i><span onClick={()=>props.onPageChanged(pagesCount)}>&raquo;</span></>  : undefined}

        </div>

    );
};

export default Pagination;