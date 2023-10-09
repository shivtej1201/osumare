import React from 'react'
import navi from "../Image/rafiki.png"

const Navigation = () => {
  return (
        <>
            <div className="container naivigarion">
                <div className="main" id='main'>
                    <h3>Navigating Real Estate's Digital Landscape</h3>
                    <p>Insights for Real Estate Marketing Advantage</p>
                </div>
            <div className="navigates">
                <div className="naivigate">
                        <div className="code" id='card'>   
                        <i class="fa-solid fa-star"></i>
                            <div className="card-main">
                                <h5 className="card-heading">Market Trends Analysis</h5>
                                <p className="card-para">Predictive insights to guide real estate strategies.</p>
                            </div>
                        </div>

                        <div className="code" id='card'>   
                        <i class="fa-solid fa-bolt"></i>
                            <div className="card-main">
                                <h5 className="card-heading">Targeted Buyer Persona</h5>
                                <p className="card-para">Understand and connect with your ideal property buyers.</p>
                            </div>
                        </div>

                        <div className="code" id='card'>   
                        <i class="fa-solid fa-square-check"></i>
                            <div className="card-main">
                                <h5 className="card-heading">Competitor Insights</h5>
                                <p className="card-para">Stand out in the property market with informed strategies.</p>
                            </div>
                        </div>

                        <div className="code" id='card'>   
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                            <div className="card-main">
                                <h5 className="card-heading">Visual Content Appeal</h5>
                                <p className="card-para">Captivate buyers with appealing visuals and immersive experiences.</p>
                            </div>
                        </div>
                    </div>
                        <div className="navigate_img">
                            <img src={navi} alt="navi" />
                         </div>
                    

                </div>
            </div>
        
        
        </>
  )
}

export default Navigation