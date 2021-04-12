import React from 'react'

import PaginationControl from './PaginationControl'
import { withStore } from '../store'

const Pagination = (props) => {
  
  const { 
    currentPageIndex,
    pagesCount,
    onPageChange 
  } = props
  
  const pagesIndexes =  [...Array(pagesCount).keys()]

  if (pagesIndexes.length <= 1) {
    return null
  }

  return(
    <ul className="pagination">
      {pagesIndexes.map(pageIndex =>  <PaginationControl
          key={pageIndex}
          current={currentPageIndex}
          pageIndex={pageIndex}
          onChange={onPageChange} />
      )}
    </ul>
  )
}

export default withStore(Pagination)
