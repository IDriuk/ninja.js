import React from 'react'

import PaginationControl from './PaginationControl'

const Pagination = ({ current, count, onChange }) => {
  const pagesIndexes =  [...Array(count).keys()]

  if (pagesIndexes.length <= 1) {
    return null
  }

  return(
    <ul className="pagination">
      {pagesIndexes.map(pageIndex =>  <PaginationControl
          key={pageIndex}
          current={current}
          pageIndex={pageIndex}
          onChange={onChange} />
      )}
    </ul>
  )
}

export default Pagination
