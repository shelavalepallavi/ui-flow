
import Header from './Header'
import { Link } from 'react-router-dom'

const Profile = () => {
  const Events = [
    {date: '27', month:'May', name:"Mom's Birthday", time:'9:00am - 15:00pm'},
    {date: '6', month:'June', name:"Concert at New York", time:'8:00pm - 11:00pm'},
    {date: '30', month:'Sep', name:"My Birthday", time:'All Day'},
  ]
  return (
    <div className="d-flex flex-column  w-100 min-vh-100" style={{background:'#ACF8FF'}}>
      <div style={{ background: "url('/images/about.png') no-repeat center center", backgroundSize: 'contain', height: '30vh' }}>
      <Header/>
      <div className="d-inline-block bg-white p-2 rounded-circle ms-4 mt-2">
      <Link to="/dashboard"><img src="/images/about-arrow.svg" alt="about-arrow.svg"/></Link>
      </div>
     </div>

     <div className="px-4" style={{ backgroundColor: '#F5FCFE', minHeight: '70vh', borderRadius: '30px 30px 0px 0px' }}>
      <div className="d-flex flex-column align-items-center" style={{marginTop:'-50px'}}>
      <img src="/images/user-img.png" alt="user-img.png" width="107" height="107"/>
      <p style={{ color: '#683B0D', lineHeight: '24px' }} className="fs-5 fw-bold pt-2">Laura Pergolizzi</p>
      <div className="d-flex  align-items-center gap-3">
        <img src="/images/about-letter.svg" alt="about-letter.svg" className="p-2 rounded" style={{ background: '#D3C7C7', cursor: 'pointer' }}/>
        <img src="/images/about-phone.svg" alt="about-phone.svg" className="p-2 rounded" style={{ background: '#FCE2B6', cursor: 'pointer' }}/>
        <img src="/images/about-twitter.svg" alt="about-twitter.svg" className="p-2 rounded" style={{ background: '#ACF8FF', cursor: 'pointer' }}/>
      </div>
      </div>
      <div>
      <p className="fw-bold about-para1" style={{ color: '#F89300', lineHeight: '19px' }}>About you</p>
      <p className="about-para2" style={{ color: '#707070', lineHeight: '150%' }}>Laura Pergolizzi is known professionally as LP, is an American singer and songwriter, best known for her single "Lost on You".</p>
    </div>
    <div className="pb-2 pt-2">
      <p className="fs-6 fw-bold" style={{ color: '#F89300', lineHeight: '19px' }}>Upcoming events</p>
      <div className="d-flex flex-sm-row flex-column align-items-center flex-wrap gap-5">
        {Events.map((event, index) => (
          <div className="d-flex align-items-center gap-4 px-3 py-3 pe-5" style={{ background: '#F2F2F2', borderRadius: '20px' }} key={index}>
          <div className="px-3 py-2 d-flex flex-column" style={{ background: '#FCE2B6', borderRadius: '10px' }}>
            <span className="fs-3 fw-bold" style={{ color: '#F89300', lineHeight: '33px' }}>{event.date}</span>
            <span className="fw-bold" style={{ color: '#F89300', fontSize: '14px', lineHeight: '17px' }}>{event.month}</span>
          </div>
          <div className="d-flex flex-column">
            <span className="fw-bold fs-6" style={{ color: '#707070', lineHeight: '19px' }}>{event.name}</span>
            <span style={{ color: '#707070', lineHeight: '150%', fontSize: '13px' }}>{event.time}</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>

    </div>
  )
}

export default Profile
