import React from 'react'
import { withStore } from '../store'

const Search = (props) => {
  const { onSearchChange } = props

  return (
    <div className="pb-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearchChange} />
    </div>
  )
}

export default withStore(Search)
