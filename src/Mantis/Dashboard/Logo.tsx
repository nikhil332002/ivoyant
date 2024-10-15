const Logo=()=>{
    return(
    <>
    <div className="mantis-container">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="#0066FF">
            <path d="M480 776 240 536l240-240 240 240-240 240Zm0 280L0 576l480-480 480 480-480 480Z" />
          </svg>
        </div>
        <h1 className="mantis-name">Mantis</h1>
        <span className="version-badge">v1.3.0</span>
      </div>
    </>
    )
}
export default Logo;