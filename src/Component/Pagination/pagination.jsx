import React from "react";
import "./pagination.css";

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];
    // This loop for Pages Number
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        if (totalPosts > 6){
            pages.push(i);
        }
    }

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;