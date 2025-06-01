import { useEffect } from "react";
import { useRef } from "react";
import Chart from "chart.js/auto";
import { Link } from "react-router-dom";
import Header from "./Header"


const Dashboard = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Create gradients
    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, "rgba(136, 132, 216, 0.2)");
    gradient1.addColorStop(1, "rgba(136, 132, 216, 0)");

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, "rgba(130, 202, 157, 0.2)");
    gradient2.addColorStop(1, "rgba(130, 202, 157, 0)");

    const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(0, "rgba(255, 99, 132, 0.2)");
    gradient3.addColorStop(1, "rgba(255, 99, 132, 0)");

    // Destroy existing chart on re-render
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Visits",
            data: [12, 15, 12, 16, 26],
            fill: true,
            backgroundColor: gradient1,
            borderColor: "#8e44ad",
            tension: 0.4,
            pointBackgroundColor: "#8e44ad",
            pointRadius: 5,
          },
          {
            label: "Likes",
            data: [15, 12, 28, 16, 26],
            fill: true,
            backgroundColor: gradient2,
            borderColor: "#2ecc71",
            tension: 0.4,
            pointBackgroundColor: "#2ecc71",
            pointRadius: 5,
          },
          {
            label: "Conversions",
            data: [12, 15, 16, 16, 26],
            fill: true,
            backgroundColor: gradient3,
            borderColor: "#e74c3c",
            tension: 0.4,
            pointBackgroundColor: "#e74c3c",
            pointRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
          tooltip: {
            enabled: false,
          },
          datalabels: {
            display: true,
          },
        },
        scales: {
          x: { display: false },
          y: { display: false },
        },
        elements: {
          line: { borderWidth: 2 },
          point: { hoverRadius: 6 },
        },
      },
    });

    // Resize on window change
    const handleResize = () => {
      chartInstanceRef.current.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      chartInstanceRef.current.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Activity = [
    {bg_color:'#f7e3ff', emoji:'images/visits.svg', title:'VISITS', num:'4,324'},
    {bg_color:'#d8ffe8', emoji:'images/likes.svg', title:'LIKES', num:'654'},
    {bg_color:'#fff7df', emoji:'images/fav.svg', title:'FAVORITES', num:'855'},
    {bg_color:'#def7ff', emoji:'images/views.svg', title:'VIEWS', num:'5,436'},
  ]
  return (
    <div
      className="w-100 min-vh-100 d-flex flex-column"
      style={{ fontFamily: "Open Sans" }}
    >
      <Header/>

      <div className="px-2 d-flex flex-sm-row flex-column-reverse justify-content-between gap-4 position-relative">
        <div className="fixed-sm-bottom bg-white z-1">
          <div className="fixed-sm-bottom bg-white z-1">
            <div className="d-flex flex-row  flex-sm-column align-items-start justify-content-sm-start justify-content-between gap-5 py-3 py-sm-0">
              <Link to='/ecommerce'
                className="hover-wrapper p-2 rounded-circle">
                <img
                  src="/images/home.svg"
                  alt="home.svg"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <Link
                to='/blog'
                className="hover-wrapper p-2 rounded-circle"
              >
                <img
                  src="/images/activiti.svg"
                  alt="activiti.svg"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <Link
                to='/chat'
                className="hover-wrapper p-2 rounded-circle"
              >
                <img
                  src="/images/message.svg"
                  alt="message.svg"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <Link to='/map' className="hover-wrapper p-2 rounded-circle">
                <img
                  src="/images/map.svg"
                  alt="map.svg"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <Link
                to='/profile'
                className="hover-wrapper p-2 rounded-circle"
              >
                <img
                  src="/images/profile.svg"
                  alt="profile.svg"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
            <div className="d-sm-none d-flex justify-content-center align-items-end flex-grow-1 py-1 position-relative z-1">
              <img src="/images/rectangle.svg" alt="rectangle.svg" />
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-grow-1">
          <div className="d-flex justify-content-center">
          <Link to='/chat'
            ><img
              src="/images/chat.svg"
              alt="chat.svg"
             style={{cursor:'pointer'}}
          /></Link>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column justify-content-center">
            <div className="position-relative" style={{width:'160px', height:'160px'}}>
              <svg style={{transform: 'rotate(-90deg)'}} width="160" height="160">
                <circle className="ring-bg" cx="80" cy="80" r="70" style={{fill:'none', strokeWidth:'10', stroke: '#e6e6e6'}}/>
                <circle className="ring-progress" cx="80" cy="80" r="70" style={{fill:'none', strokeWidth:'8'}}/>
              </svg>
              <div className="position-absolute top-50 start-50 text-center" style={{transform:'translate(-50%, -50%)'}}>
                <div className="fw-bold" style={{fontSize:'24px', lineHeight:'28px', color:'#4F3A57', }}>345</div>
                <div className="fw-semibold" style={{color:'#4F3A57', marginTop:'4px', fontSize:'13px', lineHeight:'15px'}}>REACH</div>
                <div className="d-flex justify-content-center align-items-center gap-1" style={{marginTop:'8px'}}>
                  <span style={{color:'#6fcf97'}}>⬆</span>
                  <span className="fw-semibold" style={{color:'#6fcf97', fontSize:'13px', lineHeight:'15px'}}>8.1%</span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span className="fw-bold text-uppercase" style={{color:'#bdbdbd', letterSpacing:'0.06em', fontSize:'10px', lineHeight:'14px'}}
                >new achievement</span>
              <span className="fw-bold" style={{ color: "#6fcf97", fontSize: "18px", lineHeight: "25px" }}>Social Star</span>
            </div>
          </div>
          <div>
            <img
              src="/images/dashboard.png"
              alt="dashboard.png"
              width="100%"
              height="225"
            />
          </div>
        </div>

        <div className="d-flex flex-column align-items-center pb-3" style={{borderTop:'6px solid #f5f4f4'}}
        >
          <p className="pt-4 pb-2" style={{color:'#4f3a57', lineHeight:'22px', fontSize:'18px'}}> Key metrics <span className="fw-bolder">this week</span>
          </p>
          <div className="d-flex gap-sm-5 gap-2 flex-wrap justify-content-center">
            {Activity.map((item, index) => (
              <div className="d-flex align-items-center justify-content-between gap-3 p-4" style={{borderRadius:'15px', boxShadow:'0px 2px 10px rgba(178, 3, 108, 0.03),0px 9px 30px rgba(163, 1, 79, 0.05)'}} >
              <div className="rounded-circle p-2 hover-dash text-center"  style={{background:item.bg_color, width:'46px', height:'46px'}}>
                <img src={item.emoji} alt="visits.svg" />
              </div>
              <div className="d-flex flex-column">
               <span style={{color: "#bdbdbd", letterSpacing: "0.06em", fontSize: "10px", lineHeight: "14px", }}>{item.title}</span>
               <span style={{color: "#4f3a57",letterSpacing: "0.02em",lineHeight: "33px",}}className="fs-4 fw-bold">{item.num}</span>
              </div>
            </div>
            ))}
            </div>
          </div>

          {/* <!-- chart --> */}
        <div style={{ position: "relative", width: "100%", height: "250px" }}>
           <canvas ref={chartRef}
           style={{
            display: "block",
            width: "100%",
            height: "100%",
            boxShadow:"0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05)",
            borderRadius: "20px",
            paddingTop: "20px",
            }}>
            </canvas>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
