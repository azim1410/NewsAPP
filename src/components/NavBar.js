import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NavBar extends Component {
  static propTypes = {}

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsAPP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/sports">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/technology">Technology</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    )
  }
}

export default NavBar