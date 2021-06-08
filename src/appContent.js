'use strict'
import React from 'react'
import Actions from './actions'
import Repositories from './repositories'
import Search from './search'
import UserInfo from './user-info'
const AppContent = ({userinfo, repos, starred, handleSearch, getRepos, getStarred, isFetching, isFetchingRepos}) =>(  
  <div className="app">
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        <Search isDisabled={isFetching} handleSearch={handleSearch}/>
        {isFetching && <div className="box"><h1>Loading</h1></div>}
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred } isDisabled={isFetchingRepos}/>}
        {isFetchingRepos && <div className="box"><h1>Loading</h1></div>}
        {!!repos.length &&
          <Repositories className="repos" title="Repositories:" repos={repos}/>
        }
        {!!starred.length  && 
          <Repositories className="starred" title="Favorites:" repos={starred}/>
        }
    </div>
)

AppContent.propTypes = {
  userinfo: React.PropTypes.object,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired,
  handleSearch: React.PropTypes.func.isRequired,
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  isFetchingRepos: React.PropTypes.bool.isRequired,
}
export default AppContent