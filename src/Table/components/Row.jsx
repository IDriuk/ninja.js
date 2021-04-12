import React from 'react'

const Row = (props) => {
  const { row } = props

  return (
    <tr>
      <td>
        <div className="user-name">
          <a href={row.edit_path}>
            {row.name}
          </a>
          <small>{row.email}</small>
        </div>
      </td>
    </tr>
  )
}

export default Row
