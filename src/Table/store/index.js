import React, { useState } from 'react'

export const TableContext = React.createContext();

export const useStore = (props) => {
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

  const onPageChange = (pageNumber) => {
    setTableState({...tableState, currentPageNumber: pageNumber })
  }

  const rowsInPageNumber = (pageNumber) => {
    const { rowsPerPage } = props || 40
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }
  
  const { rows, currentPageNumber, totalNumberOfPages } = tableState
  const rowsToRender = rows.slice(...rowsInPageNumber(currentPageNumber))

  return {
    rowsToRender,
    currentPageNumber,
    totalNumberOfPages,
    search,
    onPageChange
  }
}

function calculateTotalNumberOfPages({rows, rowsPerPage}){
  rowsPerPage = rowsPerPage || 40
  if (rowsPerPage === 0) return 0
  return Math.ceil(rows.length / rowsPerPage)
}