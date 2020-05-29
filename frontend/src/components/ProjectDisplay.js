import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

class ProjectDisplay extends Component {

    constructor(props) {
        super(props);

        this.deleteStudent=this.deleteStudent.bind(this)
      
    }
    componentDidMount(){

    }

    deleteStudent(){
        axios.delete('http://localhost:5000/projectdelete/'+this.props.obj._id)
        .then((res) =>{
            console.log("Deleted Successfully")
        })
        .catch((err)=>{
           
            console.log(err)
        })
    }
    

    render() {
            return (
           
            <tr>
            <td scope="row">{this.props.obj.rollno}</td>
            <td>{this.props.obj.name}</td>
            <td>{this.props.obj.project}</td>
            
            <td><Link className="btn btn-info" to={"/single-student/"+this.props.obj._id}>Show more info</Link></td>
            <td><button onClick={this.deleteStudent} className="btn btn-danger">Delete Record</button></td>
           </tr>
           
        )
    }
}

export default ProjectDisplay
