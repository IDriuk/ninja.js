import React from 'react'

const PaginationControl = (props) => {
  const { pageIndex, current, onChange } = props

  const isActivePage = current === pageIndex
  const pageNumber = pageIndex + 1

  const onClick = (event) => {
    event.preventDefault()
    onChange(pageIndex)
  }

  return(
    <li className="page-item mr-1">
      <button 
        className={`page-link ${isActivePage ? 'button-outline' : ''}`} 
        onClick={onClick} >
          {pageNumber}
      </button>
    </li>
  )
}

export default PaginationControl
