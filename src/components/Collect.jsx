
import { useNavigate } from 'react-router-dom'

const Collect = () => {
   const navigate = useNavigate()
  const goToWelcome = ()=>{
    navigate('/welcome')
  }
  return (
    <div className='d-flex flex-column w-100 min-vh-100'>
      <header className="d-flex justify-content-between px-3 py-2">
    <p className="time fw-semibold ps-4">9:41</p>
    <div className="d-flex align-items-center gap-2">
      <img src="/images/mobile-signal.svg" alt="mobile-signal.svg" style={{cursor:'pointer'}}/>
      <img src="/images/wifi.svg" alt="wifi.svg" style={{cursor:'pointer'}}/>
      <img src="/images/battary.svg" alt="battary.svg" style={{cursor:'pointer'}}/>
    </div>
  </header>

  <main className="d-flex flex-column align-items-center justify-content-between flex-grow-1" style={{paddingTop:'100px'}}>
    <div className="position-relative">
      <img src="/images/third-circle.svg" alt="third-circle.svg" className="position-absolute z-1 top-50 translate-middle z-0 " style={{left:'52%'}}/>
      <img src="/images/third-file.svg" alt="third-file.svg" className="position-relative  z-2"/>
      <img src="/images/third-page2.svg" alt="third-page2.svg" className="position-relative z-3 card1"/>
      <img src="/images/third-page1.svg" alt="third-page1.svg" className="position-relative z-3 card2"/>
    </div>

    <div className=" position-relative d-flex flex-column gap-3 align-items-center z-1" style={{paddingTop:'90px', paddingBottom:'90px'}}>
      <h2 className="fw-bold" style={{fontSize:'36px', color:'#545454'}}>Collect</h2>
      <p className="text-wrap px-3 px-sm-0" style={{fontSize:'18px', letterSpacing:'0.02em', color:'#545454'}}>Collect case studies of the best teachers in the   game  industry</p>
    </div>

   <div className="d-flex flex-column align-items-center">
     <div className="position-relative z-1">
      <img src="/images/third-progress.svg" alt="third-progress.svg"/>
    </div>

    <div className="position-relative z-1 py-4">
      <button className="button third-button" onClick={goToWelcome}>GET STARTED</button>
    </div>

    <div className="position-relative z-1 pt-3">
      <img src="/images/rectangle.svg" alt="rectangle.svg"/>
    </div>
   </div>

    <div className="position-fixed bottom-0 end-0">
      <img src="/images/third-big-circle.svg" alt="third-big-circle.svg"/>
    </div>
  </main>
    </div>
  )
}

export default Collect
