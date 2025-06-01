
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const Login = () => {
  const [masked, setmasked] = useState('')
  const [realPassword, setRealPassword] = useState('')

   const navigate = useNavigate()
  const goTodash = ()=>{
    navigate('/dashboard')
  }
  const backToWelcome = ()=>{
    navigate('/welcome')
  }

  
    const handleChange = (e)=> {
      const newValue = e.target.value;

      if(newValue.length < masked.length){
        setRealPassword(prev =>  prev.slice(0, newValue.length))
      } else {
        const addedChar = newValue.replace(/\*/g, '')[0] || '';
        setRealPassword(prev => prev + addedChar)
      }
      setmasked('*'.repeat(newValue.length))

    }

  return (
    <div className="d-flex flex-column  w-100 min-vh-100">
      <div className="position-relative z-0 " style={{background:"url('/images/welcome.png') no-repeat center center", backgroundSize:'cover', height:'100vh'}}>

    
    <Header/>
  
     <div className="d-inline-block bg-white p-2 rounded-circle ms-5 mt-2" style={{cursor:'pointer'}}>
      <span onClick={backToWelcome}><img src="/images/left-arrow.svg" alt="left-arrow.svg"/></span>
    </div>

    <form action={goTodash} className="position-absolute bottom-0 start-0 z-1 pt-5 px-4 d-flex flex-column  gap-3 align-items-sm-center" style={{background:"url('/images/white-image.png') no-repeat top center", backgroundSize:'cover', height:'60vh', width:'100%'}}>
      <p className="fw-medium" style={{fontSize:'24px', color:'#3D0007'}}>Log in</p>

      <div>
        <label className="fw-light" style={{fontSize:'14px', color:'#3D0007', letterSpacing:'0.01em'}}>Your Email</label>
        <div className="border-1 py-2 px-3 d-flex gap-3" style={{border:'1px solid #989595', borderRadius:'5px'}}>
          <img src="/images/email.svg" alt="email.svg"/>
          <input type="email"  required className="border-0" style={{outline:'none'}}/>
        </div>
      </div>

      <div>
        <label  className="fw-light" style={{fontSize:'14px', color:'#3D0007', letterSpacing:'0.01em'}}>Your Password</label>
        <div className="border-1 py-2 px-3 d-flex gap-3" style={{border:'1px solid #989595', borderRadius:'5px'}}>
          <img src="/images/pass.svg" alt="pass.svg"/>
          <input type="text"   className="border-0" style={{outline:'none'}} value={masked} onChange={handleChange} required/>
          <input type="hidden" className="border-0" style={{outline:'none'}} value={realPassword} readOnly/>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button  className="welcome-button signup text-decoration-none text-white gap-4" style={{width:'160px', borderRadius:'34px'}}>Login <img src="/images/arrow.svg" alt="arrow.svg"/></button>
      </div>

      <div className="d-flex justify-content-center align-items-end flex-grow-1 pb-2">
      <img src="/images/rectangle.svg" alt="rectangle.svg"/>
    </div>
  </form>
  </div>
    </div>
  )
}

export default Login
