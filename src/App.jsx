import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Learn from './components/Learn'
import Code from './components/Code'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Learn/>}/>
          <Route path='/code' element={<Code/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
