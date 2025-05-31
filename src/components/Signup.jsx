import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Signup = () => {
   const [masked, setmasked] = useState('')
    const [realPassword, setRealPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

   const navigate = useNavigate()
  const goTodash = ()=>{
    navigate('/dashboard')
  }
  const goToLogin = ()=>{
    navigate('/login')
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

    const togglePass = ()=> {
      setShowPassword(prev => !prev)
    }
  return (
    <div className='className="w-100 min-vh-100 position-relative' style={{background:' #000417'}}>
      <header className="d-flex justify-content-between px-2 pt-2">
    <p className="time fw-semibold ps-5 text-white">9:41</p>
    <div className="d-flex align-items-center gap-2">
      <img src="/images/mobile-signal-light.svg" alt="mobile-signal.svg" style={{cursor:'pointer'}}/>
      <img src="/images/wifi-light.svg" alt="wifi.svg" style={{cursor:'pointer'}}/>
      <img src="/images/battary-light.svg" alt="battary.svg" style={{cursor:'pointer'}}/>
    </div>
  </header>

  <div className="px-5 pt-5 d-flex flex-column  align-items-sm-center ">
    <div>
      <img src="/images/apple.svg" alt="apple.svg"/>
    </div>


    <div className="pt-3 pb-5 d-flex flex-column align-items-sm-center gap-1">
      <span className="fw-semibold text-white" style={{fontSize:'36px'}}>Sign up</span>
      <span style={{fontSize:'18px', lineHeight:'120%', color:'#d8d8d8'}}>Already have an account? <br/><span onClick={goToLogin} style={{color:'#99E6FC', fontWeight:'500', cursor:'pointer'}}>Sign in</span></span>
      
    </div>

    <form action={goTodash} className="d-flex flex-column gap-3">
      <div>
        <label  className="fw-light" style={{fontSize:'14px', color:'#D8D8D8', letterSpacing:'0.01em'}}>Your Name</label>
        <div className="border-1 py-2 px-3 d-flex gap-2" style={{border:'1px solid #ECECEC', borderRadius:'5px'}}>
          <img src="/images/user.svg" alt="user.svg"/>
          <input type="name"  required className="border-0 bg-transparent fw-light" style={{outline:'none', color:'#D8D8D8', fontSize:'18px'}}/>
        </div>
      </div>
      <div>
        <label  className="fw-light" style={{fontSize:'14px', color:'#D8D8D8', letterSpacing:'0.01em'}}>Your Email</label>
        <div className="border-1 py-2 px-3 d-flex gap-2" style={{border:'1px solid #ECECEC', borderRadius:'5px'}}>
          <img src="/images/email-light.svg" alt="email-light.svg"/>
          <input type="email" required className="border-0 bg-transparent fw-light" style={{outline:'none', color:'#D8D8D8', fontSize:'18px'}}/>
        </div>
      </div>
      <div>
        <label  className="fw-light" style={{fontSize:'14px', color:'#D8D8D8', letterSpacing:'0.01em'}}>Your Password</label>
        <div className="border-1 py-2 px-3 d-flex justify-content-between" style={{border:'1px solid #ECECEC', borderRadius:'5px'}}>
          <div className="d-flex gap-2">
            <img src="/images/pass-light.svg" alt="pass-light.svg"/>
          <input type="text" className="border-0 bg-transparent fw-light" style={{outline:'none', color:'#D8D8D8', fontSize:'18px'}} value={showPassword ? realPassword : masked} onChange={handleChange} required/>
          <input type="hidden" className="border-0 bg-transparent fw-light" style={{outline:'none', color:'#D8D8D8', fontSize:'18px'}} value={realPassword} readOnly/>
          </div>
          <img src={showPassword ? '/images/eye-open.svg': '/images/eye-close.svg'} alt="eye-close.svg" style={{cursor:'pointer'}} onClick={togglePass}/>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button type="submit"  className="welcome-button signup text-decoration-none text-white gap-4"  style={{width:'160px', borderRadius:'5px', background:'linear-gradient(135deg, #016481 0%, #67D9FA 100%)'}}>Sign up <img src="/images/arrow.svg" alt="arrow.svg"/></button>
    </div>
    </form>

    

  </div>

   <div className="d-flex flex-column  gap-4 pb-2 px-5  position-absolute bottom-0 w-100">
      <div className="d-flex align-items-center  justify-content-end justify-content-sm-center gap-3">
        <span style={{color:'#7077A0', fontSize:'14px'}}>Follow us</span>
        <img src="/images/instagram-light.svg" alt="instagram-light.svg" style={{cursor:'pointer'}}/>
        <img src="/images/facebook-light.svg" alt="facebook-light.svg" style={{cursor:'pointer'}}/>
        <img src="/images/twitter-light.svg" alt="twitter-light.svg" style={{cursor:'pointer'}}/>
      </div>
      <div className="d-flex justify-content-center">
        <img src="/images/hr-line-light.svg" alt="hr-line-light.svg"/>
      </div>
    </div>
    </div>
  )
}

export default Signup
