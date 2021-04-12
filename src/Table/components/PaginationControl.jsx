import React from 'react'

const PaginationControl = (props) => {
  const { pageIndex, current, onChange } = props

  const isActivePage = current === pageIndex
  const pageNumber = pageIndex + 1

  const click = (event) => {
    event.preventDefault()
    onChange(pageIndex)
  }

  return(
    <li className="page-item mr-1">
      <button 
        className={`page-link ${isActivePage ? 'button-outline' : ''}`} 
        onClick={click} >
          {pageNumber}
      </button>
    </li>
  )
}

export default PaginationControl
