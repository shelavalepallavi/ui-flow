import { Link } from "react-router-dom"
import Header from "./Header"


const Ecommerce = () => {
  const MainItems = [
    {img:'/images/chocolate.png', price:'2', name:'Kit Kat',  rate:'444'},
    {img:'/images/redchoco.png', price:'3', name:'Pocky',  rate:'430'},
    {img:'/images/chocolate.png', price:'4', name:'Fanta',  rate:'440'},
    {img:'/images/redchoco.png', price:'3', name:'Kit Kat',  rate:'444'},
    {img:'/images/chocolate.png', price:'2', name:'Dark',  rate:'420'},
  ]
  const Items = [
    {img:'/images/cake.png', text:'Cakes'},
    {img:'/images/candies.png', text:'Candies'},
    {img:'/images/choco.png', text:'Chocolate'},
    {img:'/images/cake.png', text:'Ice Cream'},
    {img:'/images/candies.png', text:'Pestry'},
    {img:'/images/choco.png', text:'Choco'},
    {img:'/images/cake.png', text:'Pestry'},
  ]

  return (
    <div className="w-100 min-vh-100 d-flex flex-column" style={{fontFamily:'Open Sans'}}>
      <Header/>

     <div className="px-3 d-flex flex-sm-row flex-column-reverse justify-content-between gap-5 position-relative">
    <div className="d-flex flex-row flex-sm-column align-items-start justify-content-sm-start justify-content-between  gap-4 gap-sm-5 py-2 fixed-sm-bottom bg-white">
      <Link to="/ecommerce" className="hover-wrapper p-2 rounded-circle"><img src="/images/e-home.svg" alt="e-home.svg" style={{cursor:'pointer'}} /></Link>
      <Link to="/blog" className="hover-wrapper p-2 rounded-circle"><img src="/images/e-activity.svg" alt="e-activity.svg" style={{cursor:'pointer'}}/></Link>
      <Link to="/chat" className="hover-wrapper p-2 rounded-circle"><img src="/images/e-message.svg" alt="e-message.svg" style={{cursor:'pointer'}} /></Link>
      <Link to="/map" className="hover-wrapper p-2 rounded-circle"><img src="/images/e-map.svg" alt="e-map.svg" style={{cursor:'pointer'}} /></Link>
      <Link to="/profile" className="hover-wrapper p-2 rounded-circle"><img src="/images/e-profile.svg" alt="e-profile.svg" style={{cursor:'pointer'}}/></Link>
    </div>
    <div className="d-flex flex-column gap-4 flex-grow-1 pb-5">
      <div className="d-flex justify-content-between align-items-center gap-4 gap-sm-5">
        <div className="py-3 px-4 d-flex justify-content-between gap-4 flex-grow-1" style={{boxShadow:'0px 8px 20px rgba(0, 0, 0, 0.05)', borderRadius:'5px'}}>
          <input type="text" placeholder="Search.." className="border-0 flex-grow-1 fs-6 fw-light" style={{outline:'none', color:'#151A6A', letterSpacing:'0.0032px', lineHeight:'12px'}}/>
          <img src="/images/e-search.svg" alt="e-search.svg" style={{cursor:'pointer'}}/>
        </div>
        <Link to="./cart"><img src="/images/cart.svg" alt="cart.svg" style={{cursor:'pointer'}}/></Link>
      </div>

      <div className="d-flex justify-content-between align-items-center py-3 px-sm-5 px-4 e-gift" style={{background:'#F1E9FE', borderRadius:'5px'}}>
        <div className="d-flex flex-column">
          <span className="fw-bold" style={{color:'#151A6A', letterSpacing:'1px', fontSize:'14px', lineHeight:'18px'}}>GET YOUR</span>
          <span className="fw-light" style={{color:'#151A6A', letterSpacing:'1px', fontSize:'36px', lineHeight:'40px'}}>Daily</span>
          <span className="fw-bold" style={{color:'#151A6A', letterSpacing:'1px', fontSize:'36px', lineHeight:'40px'}}>Gift</span>
        </div>
        <div className="d-flex e-image" style={{marginBottom:'45px'}}>
          <img src="/images/gift2.png" alt="gift2.png" className="img-fluid"/>
          <img src="/images/gift1.png" alt="gift1.png"  className="img-fluid"/>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <span className="fw-light" style={{color:'#151A6A', letterSpacing:'1px', lineHeight:'18px', fontSize:'21px'}}>Delicious dopamine</span>
        <span className="fw-bold"  style={{color:'#151A6A', letterSpacing:'1px', lineHeight:'12px', fontSize:'10px', cursor:'pointer'}}>SEE ALL</span>
      </div>

      <div className="d-flex gap-4 gap-sm-5 overflow-x-auto hide-scrollbar" style={{scrollSnapType:'x mandatory'}}>
        {MainItems.map((item, index)=> (
          <div className="d-flex flex-column gap-2 flex-shrink-0" style={{maxWidth:'160px', scrollSnapAlign:'start'}}>
          <div className="position-relative" style={{boxShadow:'0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05)', width:'100%'}}>
            <img src={item.img} alt="chocolate.png" className="img-fluid" style={{aspectRatio:'1/1'}}/>
            <span className="position-absolute p-2 fw-bold" style={{ top: "15px", right: "25px", color: "#FFFFFF", fontSize: "15px", lineHeight: "11px", background: "#C4A2FC", borderRadius: "3px", backdropFilter: "blur(13.5914px)", position: "absolute" }}>${item.price}</span>
          </div>
          <span className="fw-bold" style={{ color: "#424586", letterSpacing: "0.00252px", fontSize: "14px", lineHeight: "11px" }}>{item.name}</span>
          <div className="d-flex gap-2">
            <img src="/images/stars.svg" alt="stars.svg"/>
            <span style={{ color: "#9B9B9B", fontSize: "10px", lineHeight: "8px" }}>({item.rate})</span>
          </div>
        </div>
        ))}
      </div>

      <div className="d-flex justify-content-between">
        <span style={{ color: "#151A6A", letterSpacing: "1px", lineHeight: "18px", fontSize: "21px" }} className="fw-light">Top goodies</span>
        <span style={{ color: "#151A6A", letterSpacing: "1px", fontSize: "10px", lineHeight: "12px", cursor: "pointer" }} className="fw-bold">SEE ALL</span>
      </div>

       <div className="d-flex gap-4 gap-sm-5 ps-4 pt-4 overflow-x-auto hide-scrollbar pb-3" style={{ scrollSnapType: "x mandatory" }}>
        {Items.map((item, index) => (
          <div className="d-flex flex-column align-items-center gap-3 flex-shrink-0" style={{minWidth:'55px', scrollSnapAlign:'start'}} key={index}>
          <div className="p-4" style={{background:'#fff', boxShadow:' 0px 2px 10px rgba(122, 3, 178, 0.03), 0px 9px 30px rgba(111, 1, 163, 0.09)', borderRadius:'15px'}}>
            <img src={item.img} alt="cake.png"  className="img-fluid" style={{width:'100%', maxWidth:'50px'}}/>
          </div>
          <span style={{ color: "#1D216E", letterSpacing: "0.0022px", fontSize: "11px", lineHeight: "15px" }} className="fw-bold">{item.text}</span>
        </div>
        ))}
      </div>

    </div>

  </div>
    </div>
  )
}

export default Ecommerce
