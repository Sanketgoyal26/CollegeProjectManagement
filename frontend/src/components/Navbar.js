import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import projectlist from './ProjectList'
import './projectlist.css'

const heading={
  color:'white'
}
export class Navbar extends Component {

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
      }

      constructor(props) {
        super(props);
      
      
      }
      

    render() {

      const withOutUser = (
        <h5 className='content'>Welcome user</h5>
      )

      const withUser = (
        <h5 className='content'>Welcome</h5>
      )
        const withOutLogin = (
            <ul  className="navbar-nav">
                <li  className="nav-item">
                    <Link  style={heading} to="/login" className="nav-link">
                        Login
                </Link>
                </li>
            </ul>
        )


        const withLogin=(
            <ul className="navbar-nav">
            
                

                <li  className="nav-item">
                    <Link  style={heading} to="/projectlist" className="nav-link">
                        ProjectList
                </Link>
                </li>

                <li  className="nav-item">
                <Link  style={heading} to="/newproject" className="nav-link">
                   New Project
            </Link>
            </li>

            <li className="nav-item">
                <a style={heading} href="" onClick={this.logOut.bind(this)} className="nav-link">
                Logout
              </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample10"
              aria-controls="navbarsExample10"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {localStorage.usertoken ? withUser: withOutUser}
          
            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarsExample10" >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link style={heading} to="/" className="nav-link">
                    Home
                  </Link>
                </li>
              </ul>
              {localStorage.usertoken ? withLogin : withOutLogin}
            </div>
          </nav>
        )
    }
}

export default withRouter(Navbar)
