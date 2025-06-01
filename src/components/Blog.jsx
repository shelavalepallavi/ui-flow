import { Link } from "react-router-dom";

const Blog = () => {
  const Items = [
    {img:'/images/blog.png'},
    {img:'/images/colors.jpg'},
    {img:'/images/blog.png'},
    {img:'/images/colors.jpg'},
  ]
  const ModernArt = [
    {img:'/images/art1.png', artName:'Morder Art', txt_color:'#FFDE33'},
    {img:'/images/art2.png', artName:'Street Art', txt_color:'#73E5FE'},
    {img:'/images/art3.png', artName:'Street Art', txt_color:'#73E5FE'},
  ]
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
        <Link to="/dashboard">
          <img
            src="/images/sidebar.svg"
            alt="sidebar.svg"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <img
          src="/images/b-search.svg"
          alt="b-search.svg"
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="d-flex justify-content-between align-items-end px-4">
        <span
          className="fw-bold"
          style={{ color: "#452E4F", fontSize: "28px", lineHeight: "33px" }}
        >
          Last articles
        </span>
        <span
          className="fw-semibold"
          style={{
            color: "rgba(69, 46, 79, 0.75)",
            fontSize: "14px",
            lineHeight: "150%",
          }}
        >
          Today, March 21
        </span>
      </div>
      <div className="d-flex gap-4 gap-sm-5 overflow-x-auto hide-scrollbar px-4" style={{scrollSnapType:'x mandatory'}}>
        {Items.map((item, index) => (
          <div className="d-flex flex-column gap-2" key={index}>
      <img src={item.img} alt="blog.png" width="215" height="144" className="rounded-4"/>
      <span className="fw-bold fs-6" style={{color:'#452E4F', lineHeight:'19px'}}>Dealing with imposter syndrome</span>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-1">
          <img src="/images/b-smile.svg" alt="b-smile.svg"/>
          <span className="fw-medium" style={{color:'#452E4F', fontSize:'12px', lineHeight:'14px'}}>Alan Moore</span>
        </div>
        <div className="d-flex gap-1">
          <img src="/images/comment.svg" alt="comment.svg"/>
          <span className="fw-medium" style={{color:'#452E4F', fontSize:'12px', lineHeight:'14px'}}>5 comments</span>
        </div>
      </div>
    </div>
        ))}
      </div>

      <div className="w-100 px-4 py-5" style={{background:'#00A7D4', minHeight:'60vh'}}>
        <p className="text-white fw-bold" style={{fontSize:'22px', lineHeight:'26px'}}>Modern Art</p>
        <div className="d-flex  flex-column  gap-4 ">
          {ModernArt.map((item, index)=>(
            <div className="d-flex gap-4" key={index}>
        <img src={item.img} alt="art1.png" width="103" height="103" class="rounded-4" />
        <div className="d-flex flex-column justify-content-center gap-2">
          <div className="d-flex gap-1">
            <img src="/images/yellow.svg" alt="yellow.svg" />
            <span
              className="fw-bold"
              style={{ color: item.txt_color, fontSize: "12px", lineHeight: "14px" }}
            >
              {item.artName}
            </span>
          </div>
          <span
            className="d-flex fs-6 fw-bold text-white"
            style={{ lineHeight: "19px" }}
          >
            About the new art deco for designers and artists
          </span>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-1">
              <img src="/images/bsmile2.svg" alt="bsmile2.svg" />
              <span
                className="fw-medium text-white"
                style={{ fontSize: "12px", lineHeight: "14px" }}
              >
                Frank Rimes
              </span>
            </div>
            <div className="d-flex gap-1">
              <img src="/images/comment-white.svg" alt="comment-white.svg" />
              <span
                lassName="fw-medium"
                style={{ fontSize: "12px", lineHeight: "14px", color: "#fff" }}
              >
                8 comments
              </span>
            </div>
          </div>
        </div>
      </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Blog;
