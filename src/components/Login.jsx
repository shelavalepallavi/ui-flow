import React from 'react'

const Login = () => {
  return (
    <div className="d-flex flex-column  w-100 min-vh-100">
      <div className="position-relative z-0" style={{background:"url('/images/welcome.png') no-repeat center center", height:'100vh'}}>

    
    <header className="d-flex justify-content-between px-2 pt-2">
    <p className="time fw-semibold ps-5">9:41</p>
    <div className="d-flex align-items-center gap-2">
      <img src="/images/mobile-signal.svg" alt="mobile-signal.svg" style={{cursor:'pointer'}}/>
      <img src="/images/wifi.svg" alt="wifi.svg" style={{cursor:'pointer'}}/>
      <img src="/images/battary.svg" alt="battary.svg" style={{cursor:'pointer'}}/>
    </div>
  </header>
  
     <div className="d-inline-block bg-white p-2 rounded-circle ms-5 mt-2">
      <a href="./welcome.html"><img src="/images/left-arrow.svg" alt="left-arrow.svg"/></a>
    </div>

    <form action="./dashboard.html" method="GET" style="background:  url('/images/white-image.png') no-repeat top center; background-size: cover; height: 60vh; width: 100%; "  className="position-absolute bottom-0 start-0 z-1 pt-5 px-4 d-flex flex-column  gap-3 align-items-sm-center">
      <p className="fw-medium" style="font-size: 24px; color: #3D0007;">Log in</p>

      <div>
        <label for="email" className="fw-light" style="font-size: 14px; color: #3D0007; letter-spacing: 0.01em;">Your Email</label>
        <div className="border-1 py-2 px-3 d-flex gap-3" style="border: 1px solid #989595; border-radius: 5px;">
          <img src="/images/email.svg" alt="email.svg"/>
          <input type="email" name="email" required className="border-0" style="outline: none;"/>
        </div>
      </div>

      <div>
        <label for="customPassword" className="fw-light" style="font-size: 14px; color: #3D0007; letter-spacing: 0.01em;">Your Password</label>
        <div className="border-1 py-2 px-3 d-flex gap-3" style="border: 1px solid #989595; border-radius: 5px;">
          <img src="/images/pass.svg" alt="pass.svg"/>
          <input type="text" name="password" id="customPassword" required className="border-0" style="outline: none;"/>
          <input type="hidden" name="password" id="realPassword" required className="border-0" style="outline: none;"/>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button  className="welcome-button signup text-decoration-none text-white gap-4" style="width: 160px; border-radius: 34px;">Login <img src="/images/arrow.svg" alt="arrow.svg"/></button>
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
