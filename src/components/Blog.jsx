import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="w-100 min-vh-100 d-flex flex-column gap-3">
      <header className="d-flex justify-content-between px-3 pt-2">
        <p className="time fw-semibold ps-4">9:41</p>
        <div className="d-flex align-items-center gap-2">
          <img
            src="/images/mobile-signal.svg"
            alt="mobile-signal.svg"
            style={{ cursor: "pointer" }}
          />
          <img
            src="/images/wifi.svg"
            alt="wifi.svg"
            style={{ cursor: "pointer" }}
          />
          <img
            src="/images/battary.svg"
            alt="battary.svg"
            style={{ cursor: "pointer" }}
          />
        </div>
      </header>

      <div className="d-flex justify-content-between align-items-center px-4">
    <Link to="/dashboard"><img src="/images/sidebar.svg" alt="sidebar.svg" style={{ cursor: "pointer" }}/></Link>
    <img src="/images/b-search.svg" alt="b-search.svg" style={{ cursor: "pointer" }}/>
  </div>

  <div className="d-flex justify-content-between align-items-end px-4">
    <span className="fw-bold" style={{color:'#452E4F', fontSize:'28px', lineHeight:'33px'}}>Last articles</span>
    <span className="fw-semibold" style={{color:'rgba(69, 46, 79, 0.75)', fontSize:'14px', lineHeight:'150%'}}>Today, March 21</span>
  </div>
    </div>
  );
};

export default Blog;
