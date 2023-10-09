import React from 'react'
import middle from "../Image/bro.png"

const Middlecopy = () => {
  return (
    <>
        <div className="container middle">
            <div className="middle_flude">
                <div className="main">
                    <h3> Driving Property Inquiries to Conversions</h3>
                    <p>Streamlined Strategies for Real Estate Success</p>
                </div>
                <div className="middles">
                    <img src={middle} alt="" />
                    <div className="kite" id='kite'>
                        <h6>Optimized Path to Property Purchase</h6>
                        <p>In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
                        <div className="btn">
                            <button>Get Started</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Middlecopy