import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import ProjectList from './components/ProjectList';
import NewDetails from './components/NewDetails'
import SingleStudent from './components/SingleStudent'
import EditStudent from './components/EditStudent';


function App() {
  return (
  
     <Router>
     <div className="App">
     <Navbar/>
     <Route exact path='/' component={Landing}/>
     <Route path="/login" component={Login}/>
     <Route path="/projectlist" component={ProjectList}/>
     <Route path="/newproject" component={NewDetails}/>
     <Route path="/single-student/:id" component={SingleStudent}/>
     <Route path="/edit-student/:id" component={EditStudent}/>
     
     </div>
     </Router>

   
  );
}

export default App;
