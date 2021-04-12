import React, { useContext } from 'react'

import PaginationControl from './PaginationControl'
import { TableContext } from '../store'

const Pagination = () => {
  
  const { 
    currentPageIndex,
    pagesCount,
    onPageChange 
  } = useContext(TableContext)
  
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

export default Pagination
