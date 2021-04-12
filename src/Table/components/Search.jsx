import React, { useContext } from 'react'
import { TableContext } from '../store'

const Search = () => {
  const { onSearchChange } = useContext(TableContext)

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearchChange} />
    </div>
  )
}

export default Search
