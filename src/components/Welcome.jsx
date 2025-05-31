import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate("/signup");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="d-flex flex-column w-100 min-vh-100">
      <div
        className="d-flex flex-column flex-grow-1"
        style={{
          background:
            "#FFDDE1 url('/images/welcome.png') no-repeat center center",
          backgroundSize: "contain",
        }}
      >
        <header className="d-flex justify-content-between px-2 pt-2">
          <p className="time fw-semibold ps-5">9:41</p>
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

        <div
          className="d-flex flex-column justify-content-center align-items-center gap-2"
          style={{ paddingTop: "100px", paddingRight: "195px" }}
        >
          <img src="/images/drink.svg" alt="drink.svg" />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2>Sour</h2>
            <p>
              Best drink <br /> receipes
            </p>
          </div>
        </div>
      </div>

      <div style={{ background: "#FEDDE1" }}>
        <div className="d-flex flex-column align-items-center justify-content-end gap-3 flex-grow-1 ">
          <button className="welcome-button signup" onClick={goToSignup}>
            Sign up
          </button>
          <button className="welcome-button login" onClick={goToLogin}>
            Login
          </button>
          <p
            style={{
              color: "#3D0007",
              fontSize: "18px",
              letterSpacing: "0.01em",
              cursor: "pointer",
            }}
          >
            Forgot password?
          </p>
          <div className="d-flex gap-3">
            <img src="/images/hr-line.svg" alt="hr-line.svg" />
            <img
              src="/images/instragram.svg"
              alt="instragram.svg"
              style={{ cursor: "pointer" }}
            />
            <img
              src="/images/facebook.svg"
              alt="facebook.svg"
              style={{ cursor: "pointer" }}
            />
            <img
              src="/images/twitter.svg"
              alt="twitter.svg"
              style={{ cursor: "pointer" }}
            />
            <img src="/images/hr-line.svg" alt="hr-line.svg" />
          </div>
          <div className="position-relative z-1 pt-3">
            <img src="/images/rectangle.svg" alt="rectangle.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
