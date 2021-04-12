import React from 'react'
import Row from './Row'

const TableContent = ({rows}) => {
  return (
    <table>
      <tbody>
        { rows.map(row => <Row key={row.per_id} row={row} />) }
      </tbody>
    </table>
  )
}

export default TableContent