import { Link } from 'react-router-dom';
import Header from './Header'

const Chat = () => {
  return (
    <div className="w-100 min-vh-100 d-flex flex-column position-relative">
      <Header/>
      <div className="d-flex align-items-center justify-content-between px-4 py-2">
        <div> 
          <Link to="./dashboard"><img src="/images/back.svg" alt="back.svg"/></Link>
          </div>
        <div className="d-flex flex-column align-items-center gap-2">
          <div className="position-relative">
            <img src="/images/chatuser.svg" alt="chatuser.svg"/>
            <div className="position-absolute rounded-circle" style={{width:'15px', height:'15px', background:'#64E100', marginLeft:'40px', marginTop:'-56px'}}></div>
          </div>
          <span className="fw-semibold" style={{color:'#383838', lineHeight:'12px', fontSize:'10px'}}>My Designer</span>
       </div>
       <div>
        <img src="/images/call.svg" alt="call.svg" style={{cursor:'pointer'}}/>
        </div>
      </div>

      <div className="p-4 d-flex flex-column gap-2" style={{background:'#CFF1B3 url(/images/chat.png) no-repeat center center', width:'100%', minHeight:'80vh', backgroundSize:'cover', borderRadius:'30px 30px 0px 0px'}}>
       <div className="d-flex justify-content-start">
        <div className="bg-white p-3 d-flex  flex-column gap-1" style={{borderRadius:'20px 20px 20px 0px'}}>
          <span style={{ color: '#364A2B', letterSpacing: '-0.02em', lineHeight: '17px', fontSize: '14px' }}>Hi Anna, is the logo done?</span>
          <div className="d-flex justify-content-end">
            <span style={{ color: '#364a2b4d', letterSpacing: '-0.02em', lineHeight: '130.34%', fontSize: '12px' }} className="fw-bold">22:20</span>
          </div>
        </div>
       </div>
       <div className="d-flex justify-content-end">
        <div  className=" p-3 d-flex  flex-column gap-1" style={{ borderRadius: '20px 20px 0px 20px', background: '#FFFB9D' }}>
          <span style={{ color: '#364A2B', letterSpacing: '-0.02em', lineHeight: '18px', fontSize: '14px' }}>Yes, I’ve sent an email with the adjustments</span>
          <div className="d-flex justify-content-end gap-1">
            <span style={{ color: '#364a2b4d', letterSpacing: '-0.02em', lineHeight: '130.34%', fontSize: '12px' }} className="fw-bold">22:30</span>
            <img src="/images/read.svg" alt="read.svg"/>
        </div>
        </div>
        </div>
      </div>
      
      <div className="d-flex justify-content-between px-3 py-3">
        <img src="/images/camera.svg" alt="camera.svg" style={{cursor:'pointer'}}/>
        <div className="px-2 py-2 d-flex justify-content-between gap-3" style={{border:'1px solid #DCDCDC', borderRadius:'23px'}}>
          <img src="/images/smile.svg" alt="smile.svg"/>
          <input type="text" className="border-0" style={{outline:'none'}}/>
          <img src="/images/send.svg" alt="send.svg" style={{cursor:'pointer'}}/>
        </div>
        <img src="/images/mike.svg" alt="mike.svg" style={{cursor:'pointer'}}/>
      </div>

      <div className="d-flex justify-content-center align-items-end flex-grow-1 py-2">
        <img src="/images/rectangle.svg" alt="rectangle.svg"/>
      </div>
    </div>
  );
};

export default Chat;
