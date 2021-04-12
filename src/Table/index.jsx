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
    currentPageRows,
    currentPageIndex,
    pagesCount,
    onSearchChange,
    onPageChange
  } = useStore(props)

  return(
    <TableContext.Provider>
      <div>
        <Search onSearch={onSearchChange} />
        <TableContent rows={currentPageRows} />
        <Pagination
          current={currentPageIndex}
          count={pagesCount}
          onChange={onPageChange} />
      </div>
    </TableContext.Provider>
  )
}



export default Table
