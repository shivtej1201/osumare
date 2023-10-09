import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="container">
             <div className="main">
                 <h3>Connect with Our Digital Marketing Experts</h3>
                 <p>Reach Out for Tailored Strategies and Results-Driven Solutions. <br />
                     Let's Elevate Your Online Presence Together</p>
             </div>

             <div className="form_flude">
                <div className="from">
                <label htmlFor="name">Name</label><br />
                <input type="text" name="fname" id="name" placeholder="Enter Your Name"/><br />

                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" placeholder="Enter Your Email"/><br />

                <label htmlFor="phone">Phone</label><br />
                <input type="Number" name="phone" id="phone" placeholder="Enter Your Number"/>
                </div>
                <div className="message">
                    <h6 htmlFor="message">Message</h6>
                    <textarea name="message" id="message"  placeholder='Enter Your Message'></textarea>
                </div>
                <div className="btn" id='btn'>
                  <button>Get Started</button>
                </div>  
             </div>

             
        
        </div>
    
    </>
  )
}

export default Contact