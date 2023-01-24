import React from 'react';
import LogoFooter  from '../images/light-logo.png'

function Footer() {
    return (
        <footer>
            <div className='first-footer'>
                <div className='info-footer'>
                    <div className='logo-footer'>
                        <img src={LogoFooter} alt=" Logo Footer" />
                    </div>
                    <p className='about-cafe'> coffee is a cafe that serve many variant of coffee and other dishes with very comfortable place </p>
                    <div className='social-media'>
                        <a href="facebook" className='link-footer'>
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="instagram" className='link-footer'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="youtube" className='link-footer'>
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="twitter" className='link-footer'>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className='facility-links'>
                    <h4 className='title-links'> facility</h4>
                    <a href="#private-room" className='link'> private room </a>
                    <a href="#meeting-room" className='link'> meeting room</a>
                    <a href="#event-space" className='link'> event space</a>
                    <a href="#creative-studio" className='link'> creative studio </a>
                    <a href="#custom-room" className='link'> custom room</a>
                </div>
                <div className='product-links'>
                    <h4 className='title-links'> product</h4>
                    <a href="#coffee" className='link'> coffee </a>
                    <a href="#beverages" className='link'> beverages</a>
                    <a href="#dishes" className='link'> dishes</a>
                </div>
                <div className='support-links'>
                    <h4 className='title-links'> support</h4>
                    <a href="#about-us" className='link'> about us</a>
                    <a href="#FAQS" className='link'> FAQS</a>
                    <a href="#privacy-policy" className='link'> privacy policy</a>
                    <a href="#help" className='link'> help me</a>
                </div>
            </div>
            <div className='last-footer'>
                <p>© 2022 coffee .all right reserved</p>
            </div>

        </footer>
    )
}
export default Footer;