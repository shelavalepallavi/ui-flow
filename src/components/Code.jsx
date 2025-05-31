

const Code = () => {
  return (
    <div className="d-flex flex-column w-100 min-vh-100">
       <header className="d-flex justify-content-between px-3 py-2">
    <p className="time fw-semibold ps-4">9:41</p>
    <div className="d-flex align-items-center gap-2">
      <img src="./assets/images/mobile-signal.svg" alt="mobile-signal.svg"/>
      <img src="./assets/images/wifi.svg" alt="wifi.svg"/>
      <img src="./assets/images/battary.svg" alt="battary.svg"/>
    </div>
  </header>

  <main className="d-flex flex-column align-items-center justify-content-between flex-grow-1" style={{paddingTop:'100px'}}>
    <div className="position-relative">
      <img src="./assets/images/second-circle.svg" alt="circle.svg" className="position-absolute z-1 custom-position-second"/>
      <img src="./assets/images/second-code.svg" alt="game.svg" className="position-relative  z-2"/>
      <img src="./assets/images/second-game.svg" alt="man.svg" className="position-relative z-2"/>
    </div>

    <div className=" position-relative d-flex flex-column gap-3 align-items-center z-1" style={{paddingTop:'90px', paddingBottom:'90px'}}>
      <h2 className="fw-bold" style={{fontSize:'36px', color:'#545454'}}>Code</h2>
      <p className="text-wrap px-3 px-sm-0" style={{fontSize:'18px', letterSpacing:'0.02em', color:'#545454'}}>Learn how to code great video game interfaces for different devices </p>
    </div>

    <div className="d-flex flex-column align-items-center">
      <div className="position-relative z-1">
      <img src="./assets/images/second-progress.svg" alt="second-progress.svg"/>
    </div>

    <div className="position-relative z-1 py-4">
      <a href="#" className="button second-button" role="button">GET STARTED</a>
    </div>

    <div className="position-relative z-1 pt-3">
      <img src="./assets/images/rectangle.svg" alt="rectangle.svg"/>
    </div>
    </div>

    <div className="position-fixed bottom-0 start-50 translate-middle-x z-0">
      <img src="./assets/images/second-big-circle.svg" alt="second-big-circle.svg"/>
    </div>
  </main>
    </div>
  )
}

export default Code
