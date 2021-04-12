import React from 'react'

import PaginationControl from './PaginationControl'

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pageNumbers =  [...Array(totalNumberOfPages).keys()]

  if (pageNumbers.length <= 1) {
    return null
  }

  return(
    <ul className="pagination">
      {pageNumbers.map(pageNumber =>  <PaginationControl
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange} />
      )}
    </ul>
  )
}

export default Pagination
