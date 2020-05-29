import React, { Component } from 'react'
import axios from 'axios'
import './projectlist.css'
import {Link} from 'react-router-dom'

 class SingleStudent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            synopsis : '',
        midterm : '',
        final :'',
        viva : '',
        marks :'' ,
        rollno :'',
        name : '',
        project : '',
        technology : '',
        id:''
             
        }
    }

    componentDidMount(){

        axios.get("http://localhost:5000/getsingle/"+this.props.match.params.id)
        .then(res=>{
            this.setState({
                synopsis : res.data.synopsis,
                midterm :res.data.midterm ,
                final :res.data.final,
                viva : res.data.viva,
                marks :res.data.marks ,
                rollno :res.data.rollno,
                name : res.data.name,
                project : res.data.project,
                technology : res.data.technology,
                id:res.data._id
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    render() {
        return (
         
            <div className="container primary">
            <div className="jumbotron">

            <div className="row">
            <div className="col-md-6">
            <h3 className="primary2">Rollno. : </h3>
            </div>
            <div className="col-md-6">
            <h3 className="primary2">{this.state.rollno}</h3>
            </div>
            </div>

            <div className="row">
            <div className="col-md-6">
            <h3 className="primary2">Student Name : </h3>
            </div>
            <div className="col-md-6">
            <h3 className="primary2">{this.state.name}</h3>
            </div>
            </div>

            <div className="row">
            <div className="col-md-6">
            <h3 className="primary2">Project Name : </h3>
            </div>
            <div className="col-md-6">
            <h3 className="primary2">{this.state.project}</h3>
            </div>
            </div>

            <div className="row">
            <div className="col-md-6">
            <h3 className="primary2">Technology : </h3>
            </div>
            <div className="col-md-6">
            <h3 className="primary2">{this.state.technology}</h3>
            </div>
            </div>


            <div className="row">
            <div className="col-md-6">
            <h3 className="primary2">Synopsis Submitted : </h3>
            </div>
            <div className="col-md-6">
            <h3 className="primary2">{this.state.synopsis}</h3>
            </div>
            </div>

            <div className="row">
            <div className="col-md-6">
            <h3 className="primary2">Midterm Report Submitted : </h3>
            </div>
            <div className="col-md-6">
            <h3 className="primary2">{this.state.midterm}</h3>
            </div>
            </div>

            <div className="row">
            <div className="col-md-6">
            <h3 className="primary2">Final Report Submitted : </h3>
            </div>
            <div className="col-md-6">
            <h3 className="primary2">{this.state.final}</h3>
            </div>
            </div>

            <div className="row">
            <div className="col-md-6">
            <h3 className="primary2">Viva : </h3>
            </div>
            <div className="col-md-6">
            <h3 className="primary2">{this.state.viva}</h3>
            </div>
            </div>

            <div className="row">
            <div className="col-md-6">
            <h3 className="primary2">Final Marks : </h3>
            </div>
            <div className="col-md-6">
            <h3 className="primary2">{this.state.marks}/100</h3>
            </div>
            </div>

           
            <Link to={"/edit-student/"+this.state.id} className="btn btn-success primary3">Update Something</Link>         
            </div>
            
            </div>
       
        )
    }
}

export default SingleStudent
