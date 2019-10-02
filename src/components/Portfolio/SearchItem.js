import React from 'react'

const SearchItem = ({ sug }) => {
  return (
    <li>`${sug["1. symbol"]} - ${sug["2. name"]}`</li>
  )
}

export default SearchItem