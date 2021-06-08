'use strict'
import React, {Component} from 'react'
import axios from 'axios'
import AppContent from './appContent'
class App extends Component{
  constructor(){
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,
      isFetchingRepos: false
    }
  }
  handleSearch(e){
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const target = e.target
    if(keyCode === ENTER){
      this.setState({isFetching: true})
      target.disabled = true
      axios.get(`https://api.github.com/users/${value}`).then((response) =>{
        this.setState({userinfo: {
          username: response.data.name,
          photo: response.data.avatar_url,
          login: response.data.login,
          repos: response.data.public_repos,
          followers: response.data.followers,
          following: response.data.following
        },
        repos: [],
        starred: []
      })
      }).catch((error) =>{
        console.error(error)
      }).then(() =>{
        this.setState({isFetching: false})
        target.disabled = false
      })
    }
  }

  getRepos(typeRepo){
    return (e) =>{
      const username = this.state.userinfo.login
      this.setState({isFetchingRepos: true})
      axios.get(`https://api.github.com/users/${username}/${typeRepo}`).then((response) =>{
        this.setState({
          [typeRepo]: response.data.map((repo, index) =>{
            return {
              name: repo.name,
              link: repo.html_url
            }
          })
        })
      }).catch((error) =>{
        console.error(error)
      }).then(() =>{
        this.setState({isFetchingRepos: false})
      })
    }
  }
  render(){
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      isFetching={this.state.isFetching}
      isFetchingRepos={this.state.isFetchingRepos}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')} 
      getStarred={this.getRepos('starred')}
      
    />
  }
}
export default App
