import React from 'react'

import '../styles/ProductRow.css'

function ProductRow(props) {
  const producto = props.name
  const precio = props.price

  return (
    <div className='product-row'>
      <span>{producto}</span><span>{`$${precio}`} </span>
    </div>
  )
}

export { ProductRow }