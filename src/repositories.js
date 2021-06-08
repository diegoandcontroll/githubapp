'use strict'
import React from 'react'

const Repositories = ({className, title, repos }) =>(
  <div className={className}>
      <h3>{title}</h3>
      <ul className="repositories">
        {repos.map((repo, index) =>(
          <li key={index}><a href={repo.link}>{repo.name}</a></li>
        ))}
      </ul>
  </div>
)
Repositories.defaultProps = {
  className: '',
}
Repositories.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired, 
  repos: React.PropTypes.array
}

export default Repositories