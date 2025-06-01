import { useNavigate } from "react-router-dom"
import Header from "./Header"

const Learn = () => {
  const navigate = useNavigate()
  const goToCode = ()=>{
    navigate('/code')
  }
  return (
    <div className='d-flex flex-column w-100 min-vh-100'>
      <Header/>
  <main className="d-flex flex-column align-items-center justify-content-between flex-grow-1"style={{paddingTop:'100px'}}>
    <div className="position-relative">
      <img src="/images/circle.svg" alt="circle.svg" className="position-absolute z-1 custom-position-sm"/>
      <img src="/images/game.svg" alt="game.svg" className="position-relative  z-2" style={{marginTop:'25px'}}/>
      <img src="/images/man.svg" alt="man.svg" className="position-relative z-2"/>
    </div>

    <div className=" position-relative d-flex flex-column gap-3 align-items-center z-1">
      <h2 className="fw-bold" style={{fontSize:'36px', color:'#545454'}}>Learn</h2>
      <p className="text-wrap px-3 px-sm-0" style={{fontSize:'18px', letterSpacing:'0.02em', color:'#545454'}}>Practice with real exercices and projects for your portfolio</p>
    </div>

    <div className="d-flex flex-column align-items-center">
      <div className="position-relative z-1">
      <img src="/images/progress.svg" alt="progress.svg"/>
    </div>

    <div className="position-relative z-1 py-4">
      <button onClick={goToCode} className="button">GET STARTED</button>
    </div>

    <div className="position-relative z-1 pt-3">
      <img src="/images/rectangle.svg" alt="rectangle.svg"/>
    </div>
    </div>

    <div className="position-fixed bottom-0 start-0 z-0">
      <img src="/images/green-cirle.svg" alt="green-cirle.svg"/>
    </div>
  </main>
    </div>
  )
}

export default Learn
