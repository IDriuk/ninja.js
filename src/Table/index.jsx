import React from 'react'

import Search from './components/Search'
import TableContent from './components/TableContent'
import Pagination from './components/Pagination'

import {
   TableContext, 
   useStore 
} from './store'

const Table = (props) => {

  const {
    rowsToRender,
    currentPageNumber,
    totalNumberOfPages,
    search,
    onPageChange
  } = useStore(props)

  return(
    <TableContext.Provider>
      <div>
        <Search onSearch={search} />
        <TableContent rows={rowsToRender} />
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={onPageChange} />
      </div>
    </TableContext.Provider>
  )
}



export default Table
