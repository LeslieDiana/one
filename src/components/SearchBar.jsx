import React from 'react'
import '../styles/SearchBar.css'
function SearchBar() {
  return (
    <div className='seach-bar__container'>
        <input type="text" value="Search.." />
        <input id='show-products' type="checkbox" />
        <label htmlFor="show-peoducts"> Only show products in stock</label>
    </div>
  )
}

export { SearchBar }