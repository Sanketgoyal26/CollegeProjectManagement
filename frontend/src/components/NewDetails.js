import React, { Component } from 'react'
import { register } from './userFunctions'


 class NewDetails extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             rollno:'',
             name:'',
             project:'',
             technology:'',
            
        }

        this.changeInput=this.changeInput.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }
    
    // handleChange(e) {
    //     this.setState({
    //       [e.target.name]: e.target.value
    //     });
    //   }

    // [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value

    changeInput(e){
        this.setState({
            [e.target.name]: e.target.type==='number'? parseInt(e.target.value): e.target.value
        })
    }

    submitHandler(e){
      e.preventDefault()

      const data={
        rollno:this.state.rollno,
        name:this.state.name,
        project:this.state.project,
        technology:this.state.technology
      }
      register(data).then(res => {
        this.props.history.push(`/projectlist`)
      })
    }
    render() {

        const isLoggedIn =(
            <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form  onSubmit={this.submitHandler} >
                  <h1 className="h3 mb-3 font-weight-normal">Post New Project</h1>
                  <div className="form-group">
                    <label htmlFor="rollno">Student Rollno.</label>
                    <input
                      type="number"
                      className="form-control"
                      name="rollno"
                      placeholder="Enter Student's Rollno."     
                      onChange={this.changeInput}
                      value={this.state.rollno}
                     
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Student Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter Student's Name"
                      onChange={this.changeInput}
                      value={this.state.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="project">Project Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="project"
                      placeholder="Enter Project's Name"
                      onChange={this.changeInput}
                      value={this.state.project}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="technology">Technology Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="technology"
                      placeholder="Enter Technology's Name"
                      onChange={this.changeInput}
                      value={this.state.technology}
                    />
                  </div>

               

                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"

                    
                  >
                    Enter
                  </button>

                  <h1></h1>
                  <h1></h1>
                </form>
              </div>
            </div>
          </div>
        )

        const notLogged = (
            <h1>401 Unauthorized Access</h1>
        )

        return (
            <div>
                { localStorage.length? isLoggedIn:notLogged}
            </div>
        )
    }
}

export default NewDetails
