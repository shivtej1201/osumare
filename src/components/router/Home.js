import React from 'react'
import bgc from "../Image/Header image.png"

const Home = () => {
  return (
    <>
    <div className="home">
      <div className="content_home"></div>
        <div className="home_text">
            <h2>Elevate <span>Real Estate Success </span>with<br /> Osumare's Digital Expertise</h2>
            <p>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
            <div className="btn">
              <button>Get Started</button>
            </div>
        </div>
    </div>
      <div className="image_home">
              <img src={bgc} alt="" />
        </div>

    </>
  )
}

export default Home