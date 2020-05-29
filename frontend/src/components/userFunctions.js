import axios from 'axios'


export const login = user => {
    return axios
      .post('http://localhost:5000/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
      
  }

export const register = detail =>{
  return axios.post('http://localhost:5000/newproject', {
    rollno:detail.rollno,
    name:detail.name,
    project:detail.project,
    technology:detail.technology
  } )
  .then(response => {
    console.log('Registered')
  })
  .catch(err=>{
      console.log("ERROR!!")
  })
}