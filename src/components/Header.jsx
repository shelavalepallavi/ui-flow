

const Header = () => {
  return (
    <div>
      <header className="d-flex justify-content-between px-3 py-2">
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
    </div>
  )
}

export default Header
