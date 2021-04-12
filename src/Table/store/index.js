import React, { useState, useContext } from 'react'

const DEFAULT_ROWS_PER_PAGE = 40

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
    const foundedRows = filterRows( props.rows, event.target.value)
    setTableState({
      ...tableState,
      rows: foundedRows,
      currentPageIndex: 0,
      pagesCount: calculatePagesCount({rows: foundedRows, rowsPerPage: props.rowsPerPage})
    })
  }

  const onPageChange = (pageNumber) => {
    setTableState({...tableState, currentPageIndex: pageNumber })
  }
  
  const { rows, currentPageIndex, pagesCount } = tableState
  const currentPageRows = getPageRows(rows, currentPageIndex, props.rowsPerPage)

  return {
    currentPageRows,
    currentPageIndex,
    pagesCount,
    onSearchChange,
    onPageChange
  }
}

function filterRows(rows, searchString) {
  if (searchString) {
    return rows.filter((row) => {
      return row.name.toLowerCase().search(searchString.toLowerCase()) > -1 ||
        (row.email && row.email.toLowerCase().search(searchString.toLowerCase()) > -1)
    })
  }

  return rows
}

function getPageRows(rows, currentPageIndex, rowsPerPage){
  rowsPerPage = rowsPerPage || DEFAULT_ROWS_PER_PAGE
  const startIndex = currentPageIndex * rowsPerPage
  return rows.slice(startIndex, startIndex + rowsPerPage)
}

function calculatePagesCount({rows, rowsPerPage}){
  rowsPerPage = rowsPerPage || DEFAULT_ROWS_PER_PAGE
  if (rowsPerPage === 0) return 0
  return Math.ceil(rows.length / rowsPerPage)
}