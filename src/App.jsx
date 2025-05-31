import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Learn from './components/Learn'
import Code from './components/Code'
import Collect from './components/Collect'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Learn/>}/>
          <Route path='/code' element={<Code/>}/>
          <Route path='/collect' element={<Collect/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
