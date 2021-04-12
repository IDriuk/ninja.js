import React from 'react'

import PaginationControl from './PaginationControl'

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages =  [...Array(totalNumberOfPages).keys()]

  if (pages.length <= 1) {
    return null
  }

  return(
    <ul className="pagination">
      {pages.map(pageNumber =>  <PaginationControl
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange} />
      )}
    </ul>
  )
}

export default Pagination
