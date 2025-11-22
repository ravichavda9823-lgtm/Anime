import React from 'react'

function Coming() {
  return (
    <div>
        <div className="page-content">
  {/* Coming Soon Area Start */}
  <section className="coming-soon-page text-center">
    <div className="container-fluid">
      <div className="content">
        <img src="assets/media/logo.png" alt className="mb-32 logo" />
        <h4 className="h-27 sec color-white mb-32">We are under construction</h4>
        <img src="assets/media/coming-soon%21.png" alt className="mb-32" />
        <ul className="timer countdown countdown-2 mb-0 data-timer2">
          <li>365<span>Days</span></li>
          <li>24<span>Hrs</span></li>
          <li>60<span>Min</span></li>
          <li className="m-0">60<span>Sec</span></li>
        </ul>
      </div>
    </div>
  </section>
  {/* Coming Soon Area end */}
</div>

    </div>
  )
}

export default Coming