import React from 'react'
import Row from './Row'
import { withStore } from '../store'

const TableContent = (props) => {
  const { currentPageRows } = props

  return (
    <table>
      <tbody>
        { currentPageRows.map(row => <Row key={row.per_id} row={row} />) }
      </tbody>
    </table>
  )
}

export default withStore(TableContent)