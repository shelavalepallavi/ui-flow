import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Learn from './components/Learn'
import Code from './components/Code'
import Collect from './components/Collect'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Ecommerce from './components/Ecommerce'
import Blog from './components/Blog'
import Chat from './components/Chat'
import Map from './components/Map'
import Profile from './components/Profile'
import Cart from './components/Cart'

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
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/ecommerce' element={<Ecommerce/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/ecommerce/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
