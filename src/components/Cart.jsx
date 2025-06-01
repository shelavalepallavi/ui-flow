import { Link } from "react-router-dom"
import Header from "./Header"

const Cart = () => {
  const Items = [
    {img: '/images/lollipop.png', alt:'lollipop.png', name: 'Roll Lollipop', stars:'/images/stars.svg', price: 4, quantity: 3},
    {img: '/images/choco-cookie.png', alt:'choco-cookie.png', name: 'Chocolate cookies', stars:'/images/4-starts.svg', price: 2, quantity: 1},
    {img: '/images/black-ice.png', alt:'black-ice.png', name: 'Black icecream', stars:'/images/3-stars.svg', price: 4.5, quantity: 1},
  ]
  return (
    <div className="w-100 min-vh-100 d-flex flex-column position-relative" style={{fontFamily:'Open Sans'}}>
      <Header/>
      <div className="px-5">
          <Link to="/ecommerce"><img src="/images/c-back.svg" alt="c-back.svg"/></Link>
      </div>

       <div className="px-5 py-4">
        <span className="fw-light" style={{ color: '#151A6A', fontSize: '28px', lineHeight: '18px' }}>Shopping <span className="fw-bold">Cart</span></span>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between flex-wrap gap-3 px-5 w-100">
        {Items.map((item, index) => (
          <div className="d-flex" style={{ borderRadius: '15px', boxShadow: '0px 2px 10px rgba(122, 3, 178, 0.03), 0px 9px 20px rgba(111, 1, 163, 0.08)', background: '#FFFFFF' }} key={index}>
          <img src={item.img} alt={item.alt} style={{ borderRadius: '15px 0px 0px 15px', width: '88px', height: '100%' }}/>
          <div className="d-flex align-items-center justify-content-between gap-sm-5 px-4 py-3 w-100">
            <div className="d-flex flex-column align-items-start gap-2">
              <span className="fw-bold" style={{ color: '#424586', fontSize: '14px', lineHeight: '11px', letterSpacing: '0.00252px' }}>{item.name}</span>
              <img src={item.stars} alt="stars.svg"/>
              <span className="fw-bold" style={{ color: '#A05EC7', fontSize: '15px', lineHeight: '11px' }}>${item.price}</span>
              </div>
              <div className="d-flex align-items-center  gap-2">
                <span style={{ color: '#424586', fontSize: '24px', lineHeight: '11px', letterSpacing: '0.00252px' }}>{item.quantity}</span>
                <div className="d-flex flex-column gap-2">
                  <img src="/images/plus.svg" alt="plus.svg" style={{cursor:'pointer'}}/>
                  <img src="/images/minus.svg" alt="minus.svg" style={{cursor:'pointer'}}/>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="position-fixed px-5" style={{bottom:'100px', right:'0'}}>
        <img src="/images/c-lolli.png" alt="c-lolli.png" style={{width:'60px', marginTop:'25px'}}/>
        <img src="/images/c-candi.png" alt="c-candi.png" style={{width:'60px', marginTop:'30px'}}/>
      </div>

      <div className=" position-fixed bottom-0 bg-white w-100">
          <div className="d-flex justify-content-center align-items-center gap-5  p-4 " style={{ boxShadow: '0px -2px 10px rgba(227, 202, 238, 0.03), 0px -6px 30px rgba(111, 1, 163, 0.03)', border: '1px solid rgba(255, 255, 255, 0.52)' }}>
            <button style={{ background: 'linear-gradient(155.73deg, #BB6BD9 -17.14%, #151A6A 285.93%)', boxShadow: '0px 16px 24px rgba(98, 36, 147, 0.26)', borderRadius: '6px', letterSpacing: '2px', fontSize: '14px', lineHeight: '12px' }} className="text-white fw-bold border-0 px-5 py-3">CHECKOUT</button>
            <div className="d-flex flex-column gap-1">
              <span className="fw-bold" style={{ color: '#424586', letterSpacing: '1px', fontSize: '14px', lineHeight: '11px' }}>TOTAL</span>
              <span className="fw-bold" style={{ color: '#A25FC9', letterSpacing: '1px', fontSize: '14px', lineHeight: '11px' }}>$<span className="fs-5">10.5</span></span></div>
          </div>
          <div className=" d-flex justify-content-center align-items-end flex-grow-1 py-2">
                <img src="/images/rectangle.svg" alt="rectangle.svg"/>
          </div>
      </div>
    </div>
  )
}

export default Cart
