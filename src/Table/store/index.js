import React, { useState, useContext } from 'react'

export const TableContext = React.createContext();

export const withStore = Component => props => {
  const storeProps = useContext(TableContext)
  const enhancedProps = {...props, ...storeProps} 
  return (
    <Component {...enhancedProps} />
  )
}

export const useStore = (props) => {
  const [tableState, setTableState] = useState(
    {
      rows: props.rows,
      currentPageIndex: 0,
      pagesCount: calculatePagesCount(props)
    }
  )

  const onSearchChange = (event) =>  {
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
      currentPageIndex: 0,
      pagesCount: calculatePagesCount({rows: rowsFound, rowsPerPage: props.rowsPerPage})
    })
  }

  const onPageChange = (pageNumber) => {
    setTableState({...tableState, currentPageIndex: pageNumber })
  }

  const rowsInPageNumber = (pageNumber) => {
    const { rowsPerPage } = props || 40
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }
  
  const { rows, currentPageIndex, pagesCount } = tableState
  const currentPageRows = rows.slice(...rowsInPageNumber(currentPageIndex))

  return {
    currentPageRows,
    currentPageIndex,
    pagesCount,
    onSearchChange,
    onPageChange
  }
}

function calculatePagesCount({rows, rowsPerPage}){
  rowsPerPage = rowsPerPage || 40
  if (rowsPerPage === 0) return 0
  return Math.ceil(rows.length / rowsPerPage)
}