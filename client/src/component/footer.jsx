import React from 'react';
import '../Styles/footer.css';

function footer() {
  return (
    <>
    <footer className='footer'>
      <div className='MainContainerFirst'>
        <div className='footerbox1'>
          <p id="footerboxheading">ABOUT</p>
            <div>Contact Us</div>
            <div>About Us</div>
            <div>Carreers</div>
            <div>Stories</div>
            <div>Press</div>
        </div>

        <div className='footerbox2'>
          <p id="footerboxheading">GROUP COMPANIES</p>
            <div>Myntra</div>
            <div>Flipkart</div>
            <div>Cleartrip</div>
            <div>Shopsy</div>
        </div>

        <div className='footerbox3'>
          <p id="footerboxheading">HELP</p>
            <div>Payments</div>
            <div>Shipping</div>
            <div>Cancelation & Returns</div>
            <div>FAQ</div>
        </div>

        <div className='footerbox4'>
          <p id="footerboxheading">Consumer POLICY</p>
            <div>Cancellation & Returns</div>
            <div>Terms of Use</div>
            <div>Security</div>
            <div>Privacy</div>
            <div>Sitemap</div>
            <div>Grievance Redressal</div>
            <div>EPR Compliance</div>
        </div>

        <div className='footerbox5'>
          <p id="footerboxheading">MAIL Us:</p>
            <div>Ramsung Internet Private Limited
                 Building Alyssa, Begonia &
                 Clove Embassy Tech Village,
                 Outer Ring Road, Devarabeesanahalli Village,
                 Bengaluru, 560103,
                 Karnataka, India
            </div>
        </div>

      </div>
      
      <hr></hr>
      <div className='MainContainerSecond'>
        <div>Become a seller</div>
            <div>Advertise</div>
            <div>Gift Cards</div>
            <div>Help Center</div>
            <div>@copyright</div>
      </div>

    </footer>
    </>
  )
}

export default footer;