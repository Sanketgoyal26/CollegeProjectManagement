import React, { Component } from 'react'
import axios from 'axios'
import './projectlist.css'

class EditStudent extends Component {


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
            technology : ''
            
        }

      
       this.updateDetails=this.updateDetails.bind(this)
       this.onSubmit=this.onSubmit.bind(this)
    }

    
    updateDetails(e){
        this.setState({
            [e.target.name]:  e.target.value
        })
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
    
    onSubmit(e) {
        e.preventDefault()
    
        const studentObject = {
            synopsis : this.state.synopsis,
            midterm :this.state.midterm ,
            final :this.state.final,
            viva : this.state.viva,
            marks :this.state.marks ,
            rollno :this.state.rollno,
            name : this.state.name,
            project : this.state.project,
            technology : this.state.technology,
            
        };
    
        axios.put('http://localhost:5000/projectupdate/' + this.props.match.params.id, studentObject)
          .then((res) => {
            console.log(res.data)
            console.log('Student successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
        // Redirect to Student List 
        this.props.history.push('/projectlist')
      }
    

    render() {
        return (
            <div className="container primary4">
            <div className="form-wrapper">
            <form onSubmit={this.onSubmit}>

            <div className="form-group">
              <label>Rollno</label>
              <input name="rollno" className="form-control" type="text" value={this.state.rollno} onChange={this.updateDetails} />
            </div>

              <div className="form-group">
                <label>Name</label>
                <input name="name" className="form-control" type="text" value={this.state.name}  onChange={this.updateDetails} />
              </div>
      
              

            <div className="form-group">
            <label>Project</label>
            <input name="project" className="form-control" type="text" value={this.state.project}  onChange={this.updateDetails}/>
          </div>

          <div className="form-group">
          <label>Technology</label>
          <input name="technology" className="form-control" type="text" value={this.state.technology} onChange={this.updateDetails} />
        </div>

        <div className="form-group">
        <label>Synopsis</label>
        <input name="synopsis" className="form-control" type="text" value={this.state.synopsis} onChange={this.updateDetails} />
      </div>

      <div className="form-group">
      <label>Midterm Report</label>
      <input name="midterm" className="form-control" type="text" value={this.state.midterm} onChange={this.updateDetails}/>
    </div>

    <div className="form-group">
    <label>Final Report</label>
    <input name="final" className="form-control" type="text" value={this.state.final} onChange={this.updateDetails} />
  </div>

  <div className="form-group">
  <label>Viva Voce</label>
  <input name="viva" className="form-control" type="text" value={this.state.viva} onChange={this.updateDetails} />
</div>

<div className="form-group">
<label>Marks</label>
<input name="marks" className="form-control" type="text" value={this.state.marks} onChange={this.updateDetails} />
</div>
      
              <button className="btn btn-warning primary5" type="submit">
                Update Student
              </button>
            </form>
          </div>
          </div>
        )
    }
}

export default EditStudent
