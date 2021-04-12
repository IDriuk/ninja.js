import React, { useState } from 'react'

import Pagination from './components/Pagination'
import Row from './components/Row'
import Search from './components/Search'

import { TableContext } from './store'

const calculateTotalNumberOfPages = ({rows, rowsPerPage}) => {
  rowsPerPage = rowsPerPage || 40
  if (rowsPerPage === 0) return 0
  return Math.ceil(rows.length / rowsPerPage)
}

const Table = (props) => {

  const [tableState, setTableState] = useState(
    {
      rows: props.rows,
      currentPageNumber: 0,
      totalNumberOfPages: calculateTotalNumberOfPages(props)
    }
  )

  const search = (event) =>  {
    const { rows } = props
    const text = event.target.value
    let rowsFound = rows

    if (text) {
      rowsFound = rows.filter((row) => {
        return row.name.toLowerCase().search(text.toLowerCase()) > -1 ||
         (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      })
    }

    setTableState({
      ...tableState,
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages: calculateTotalNumberOfPages({rows: rowsFound, rowsPerPage: props.rowsPerPage})
    })
  }

  const changeToPageNumber = (pageNumber) => {
    setTableState({...tableState, currentPageNumber: pageNumber })
  }

  const rowsInPageNumber = (pageNumber) => {
    const { rowsPerPage } = props || 40
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }
  
  const { rows, currentPageNumber, totalNumberOfPages } = tableState
  const rowsToRender = rows
    .slice(...rowsInPageNumber(currentPageNumber))
    .map(row => <Row key={row.per_id} row={row} />)

  return(
    <TableContext.Provider>
      <div>
        <Search onSearch={search} />
        <table>
          <tbody>
            { rowsToRender }
          </tbody>
        </table>
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={changeToPageNumber} />
      </div>
    </TableContext.Provider>
  )
}



export default Table
