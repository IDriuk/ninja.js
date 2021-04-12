import React from 'react'

import Search from './components/Search'
import TableContent from './components/TableContent'
import Pagination from './components/Pagination'

import {
   TableContext, 
   useStore 
} from './store'

const Table = (props) => {
  return(
    <TableContext.Provider value={useStore(props)}>
      <div>
        <Search/>
        <TableContent/>
        <Pagination/>
      </div>
    </TableContext.Provider>
  )
}



export default Table
