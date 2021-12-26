import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './components/layouts/Dashboard'
import SignIn from './pages/Login'
import SignUp from './pages/Register'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

axios.defaults.withCredentials = true
axios.interceptors.request.use(function (config){
    const token = localStorage.getItem('auth_token')
    config.headers.Authorization = token ? `Bearer ${token}` : ''
    return config
  })

  const App = () => {
    return (
      <Router>
        <React.Fragment>
          <Routes>
            <Route exact path="/" element={<SignIn/>}/>
            <Route exact path='/register' element={<SignUp/>}/>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </React.Fragment>
      </Router>
      
    )
  }

  export default App