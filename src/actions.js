'use strict'

import React from 'react'
const Actions = ({getRepos, getStarred, isFetchingRepos}) => (
  <div className="actions">
      <button disabled={isFetchingRepos} onClick={getRepos}>Show Repositories</button>
      <button disabled={isFetchingRepos} onClick={getStarred}>Show Favorites</button>
  </div>
)
Actions.propTypes = {
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired,
  isFetchingRepos:React.PropTypes.bool.isRequired 
}
export default Actions