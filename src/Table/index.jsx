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
    changeToPageNumber
  } = useStore(props)

  return(
    <TableContext.Provider>
      <div>
        <Search onSearch={search} />
        <TableContent rows={rowsToRender} />
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={changeToPageNumber} />
      </div>
    </TableContext.Provider>
  )
}



export default Table
