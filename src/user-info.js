'use strict'
import React from 'react'
const UserInfo = ({userinfo}) =>(
  <div className="user-info">
      <img src={userinfo.photo}/>
      <div className="content-user">
        <h1><a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a></h1>
        <p>Repositorios: {userinfo.repos}</p>
        <p>Seguidores: {userinfo.followers}</p>
        <p>Seguindo: {userinfo.following}</p>
      </div>
  </div>
)

UserInfo.propTypes = {
  userinfo: React.PropTypes.shape({
    username: React.PropTypes.string.isRequired,
    login: React.PropTypes.string.isRequired,
    photo: React.PropTypes.string.isRequired,
    repos: React.PropTypes.number.isRequired,
    followers: React.PropTypes.number.isRequired,
    following: React.PropTypes.number.isRequired,
  })
}

export default UserInfo