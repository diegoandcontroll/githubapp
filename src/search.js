'use strict'

import React from 'react' 
const Search = ({isDisabled,handleSearch}) => (
  <div className="search">
      <input type="search" placeholder="username github"
        disabled={isDisabled}
        onKeyUp={handleSearch}
      />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  isDisabled: React.PropTypes.bool.isRequired
}

export default Search