import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

 class Name extends Component {
     
    constructor(props) {
        super(props)
      
        this.state = {
           name:''
        }
      }

      componentDidMount(){
        const token=localStorage.usertoken
        const decoded=jwt_decode(token)
    
        this.setState({
          name:decoded.name
        })
      }

    render() {
        return (
            <div>
            <p></p>
               <h4>{this.state.name}</h4>
            </div>
        )
    }
}

export default Name
