import { Link } from "react-router-dom"
import Header from "./Header"
const Map = () => {
  const Item = [
    {img:'/images/map1.png', name:'Oficina Central'},
    {img:'/images/map2.png', name:'Cruce Villa Adela'},
    {img:'/images/map3.png', name:'Villa San Antonio'},
    {img:'/images/map1.png', name:'Cruce Villa Adela'},
  ]
  return (
    <div className="w-100 min-vh-100" style={{fontFamily:'Helvetica'}}>
      <div className="position-relative" style={{ background: "url('/images/map-image.svg') no-repeat center center", backgroundSize: 'cover', width: '100%', height: '126vh' }}>
       <Header/>

       <div className="px-4">
        <Link to="/dashboard"><img src="/images/chat-back.svg" alt="chat-back.svg" style={{cursor:'pointer'}}/></Link>
       </div>

       <div className="container my-4">
        <div className="px-4 py-3 d-flex gap-3" style={{ background: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(255, 255, 255, 0.52)', backdropFilter: 'blur(5px)', borderRadius: '10px' }}>
          <img src="/images/chat-search.svg" alt="chat-search.svg"/>
          <input type="text" placeholder="Search location..." className="border-0 bg-transparent fs-6 flex-grow-1" style={{ outline: 'none', color: '#4F3A57', letterSpacing: '0.04em', lineHeight: '120%' }}/>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          <img src="/images/map-emoji.svg" alt="map-emoji.svg" className="me-5"/>
          <img src="/images/map-line.svg" alt="map-line.svg" className="me-2"/>
          <img src="/images/map-circle.svg" alt="map-circle.svg" className="ms-5"/>
        </div>

         <div className="position-fixed bottom-0 start-0 w-100 px-4 py-3" style={{ minHeight: '20vh', background: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(255, 255, 255, 0.52)', backdropFilter: 'blur(5px)', borderRadius: '20px 20px 0px 0px' }}>
          <div className="d-flex justify-content-center">
            <img src="/images/map-rect.svg" alt="map-rect.svg"/>
          </div>
          <div className="d-flex overflow-x-auto gap-sm-5 gap-3 my-4 hide-scrollbar" style={{scrollSnapType:'x mandatory'}}>
              {Item.map((item, index)=> (
                <div className="d-flex flex-column align-items-center gap-3" style={{minWidth:'100px', scrollSnapAlign:'start'}}>
                <img src={item.img} alt="map1.png" className="img-fluid" style={{aspectRatio:'1/1', width:'100%'}} />
                <span style={{ color: '#452E4F', letterSpacing: '0.5px', fontSize: '11px', lineHeight: '125%' }}>{item.name}</span>
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-center align-items-end flex-grow-1">
            <img src="/images/map-blackrect.svg" alt="map-blackrect.svg"/>
          </div>
        </div>

       </div>
    </div>
  )
}

export default Map
