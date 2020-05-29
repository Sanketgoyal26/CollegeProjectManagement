import React, { Component } from 'react'
import axios from 'axios'
import ProjectDisplay from './ProjectDisplay'
import jwt_decode from 'jwt-decode'
import './projectlist.css'

 class ProjectList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       details:[],
       name:''
    }
  }

  componentDidMount(){

    const token=localStorage.usertoken
    const decoded=jwt_decode(token)

    axios.get('http://localhost:5000/projectlist')
    .then(res=>{

      this.setState({details:res.data, name:decoded.name})
    })
    
    .catch((error) =>{
      console.log(error)
    })
  }

  dataBody(){
    return this.state.details.map((res, i) => {
      return <ProjectDisplay obj={res} key={i}/>
    })
  }
  
  render() {

    return(
      <div className='container primary'>
   
      <table className="table table-hover">
      <thead className='thead-light'>
      <th scope="col">Rollno</th>
      <th scope="col">Student's Name</th>
      <th scope="col">Project</th>
      
      <th scope="col">Show more info.</th>
      <th scope="col"></th>
      </thead>
      <tbody>
      {this.dataBody()}
      </tbody>
      
      </table>

  
      </div>
    )
  }
}

export default ProjectList
