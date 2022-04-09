import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages)
    return (
        <div className='page__wrapper'>
            {pagesArray.map(el =>
                <span
                    className={page === el ? 'page page__current' : 'page'}
                    key={el}
                    onClick={() => changePage(el)}
                >
                    {el}</span>)}
        </div>
    );
};

export default Pagination;