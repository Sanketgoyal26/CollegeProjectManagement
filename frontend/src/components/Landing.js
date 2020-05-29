import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


 class Landing extends Component {
    render() {
        return (
            <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
                <h1 className="text-center">WELCOME to Project Manager</h1>
                <p> </p>
                <p>To proceed further please <Link to="/login" >Login</Link></p>
              </div>
            </div>
          </div>
        )
    }
}

export default Landing
