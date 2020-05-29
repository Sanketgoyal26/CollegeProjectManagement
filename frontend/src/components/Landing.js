import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Name from './Name'

 class Landing extends Component {
    render() {

      const withOutLog= (

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

      const withLog=(
        
        <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME to Project Manager</h1>
            <div className="container">
            <Name/>
            </div>
         </div>
        </div>
      </div>
      )

        return (
         <div>
         {
           localStorage.length?withLog:withOutLog
         }
         </div>
        )
    }
}

export default Landing
