import React, { useContext } from 'react'
import Row from './Row'
import { TableContext } from '../store'

const TableContent = () => {
  const { currentPageRows } = useContext(TableContext)

  return (
    <table>
      <tbody>
        { currentPageRows.map(row => <Row key={row.per_id} row={row} />) }
      </tbody>
    </table>
  )
}

export default TableContent