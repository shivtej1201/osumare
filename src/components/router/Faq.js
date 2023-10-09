import React from 'react'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
const Faq = () => {
  return (
    <>
    <div className="container">
        <div className="main">
            <h3>Frequently Asked Questions</h3>
            <p>Pinpoint your audience with precision, ensuring your marketing efforts reach those <br /> most likely to engage with your brand.</p>
        </div>
    <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="3. How does Osumare measure campaign success?">
        We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.
        </MDBAccordionItem>
        
      </MDBAccordion>
      <MDBAccordion>
        <MDBAccordionItem collapseId={1} headerTitle="3. How does Osumare measure campaign success?">
        We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.
        </MDBAccordionItem>
        
      </MDBAccordion>
      <MDBAccordion>
        <MDBAccordionItem collapseId={1} headerTitle="3. How does Osumare measure campaign success?">
        We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.
        </MDBAccordionItem>
        
      </MDBAccordion>
    </MDBContainer>
    
    </div>
    
    
    </>
  )
}

export default Faq