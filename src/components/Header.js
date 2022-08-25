import React from 'react'

const Header = ({search, onSearch}) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch}  />
    </div>
  )
}

export default Header