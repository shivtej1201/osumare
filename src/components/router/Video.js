import React from 'react'
import man from "../Image/Tabish formal.png"
import play from "../Image/Vector.png"
const Video = () => {
  return (
    <>
        <div className="container">
            <div className="main">
                <h3>What Our Pharma Partners Say</h3>
                <p> Driving Transformations, One Brand at a Time</p>
            </div>
            <div className="video">
                <div className="video_flude">
                    <div className="long">
                    <img src={play} alt=""/>
                    </div>
                    <div className="video_text">
                        <div className="video_img">
                            <img src={man} alt="" />
                            <h2>Tabish Khan</h2>
                            <i class="fa-solid fa-quote-right"></i>
                        </div>
                            <p>Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>
                    </div>
                </div>
            </div>
                <div className="arrow">
                    <i class="fa-solid fa-arrow-left"></i>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
        </div>
    
    
    
    
    </>
  )
}

export default Video