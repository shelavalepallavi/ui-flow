import { Link } from "react-router-dom"
import Header from "./Header"
const Map = () => {
  return (
    <div class="w-100 min-vh-100" style={{fontFamily:'Helvetica'}}>
      <div class="position-relative" style={{ background: "url('./assets/images/map-image.svg') no-repeat center center", backgroundSize: 'cover', width: '100%', height: '126vh' }}>
       <Header/>
       <div class="px-4">
        <Link to="/dashboard.html"><img src="./assets/images/chat-back.svg" alt="chat-back.svg" style={{cursor:'pointer'}}/></Link>
       </div>
      </div>
    </div>
  )
}

export default Map
