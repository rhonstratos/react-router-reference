import React, { PureComponent } from 'react'
import './main_css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router , Routes, Route, Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import NavBar from './Navs/NavBar'
import Main from './pages/Main'
import About from './pages/About'
import Profile from './pages/Profile'

 export default class App extends PureComponent {
  render(){
    return (
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar/>
              <Container className='bg-dark maincon'>
                <Outlet/>
              </Container>
            </>
          }>
            <Route path="" exact element={<Main/>}></Route>
            <Route path="Home" element={<></>}></Route>
            <Route path="About" element={<About/>}></Route>
            <Route path="Profile" element={<Profile/>}></Route>
          </Route>
        </Routes>
      </Router>
    );
  }
}
