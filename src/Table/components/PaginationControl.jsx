import React from 'react'

const PaginationControl = (props) => {
  const { pageNumber, currentPageNumber, onChange } = props

  const isActivePage = currentPageNumber === pageNumber
  const renderedPageNumber = pageNumber + 1

  const click = (event) => {
    event.preventDefault()
    onChange(pageNumber)
  }

  return(
    <li className="page-item mr-1">
      <button 
        className={`page-link ${isActivePage ? 'button-outline' : ''}`} 
        onClick={click} >
          {renderedPageNumber}
      </button>
    </li>
  )
}

export default PaginationControl
