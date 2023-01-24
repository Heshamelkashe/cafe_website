import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import FacilityImage1 from '../images/cafe-1.jpg';
import FacilityImage2 from '../images/man-1.jpg';
import FacilityImage3 from '../images/man-2.jpg';
import FacilityImage4 from '../images/cafe-2.jpg';

export default class Facility extends Component {

    state={
        MassageOpacity: 0,
        MassegeScele:"scale(0)",
    }

    componentDidMount() {

        const section = document.getElementById("facility");

        window.addEventListener("scroll", () => {
            if (window.scrollY >= section.offsetTop + 180) {

                this.setState({
                    MassageOpacity: 1,
                    MassegeScele:"scale(1)",
                })
            }
        })

        AOS.init();
    }


    render() {
        return (
            <div className="facility" id="facility">
                <div className="title-facility-section">
                    <h2 className="first-titel-facility" data-aos="fade-up"  data-aos-duration="1500"> 
                        <span className="last-titel-facility" data-aos="fade-up"  data-aos-duration="500">our facility</span>
                        be comfort in our places
                    </h2>
                    <p className="info-titel-facility" data-aos="fade-up"  data-aos-duration="3000">
                        our place designed by pro architecture with a
                        psychologist to build the best place that suit you
                    </p>
                </div>
                <div className="list-images-facility">
                    <div className="top-image-left">
                        <img src={FacilityImage1} alt="facility" />
                        <div className="massage-cofe-image-bottom-left" style={{ opacity:this.state.MassageOpacity , transform:this.state.MassegeScele }}>
                        <p className="info-massage-cofe"> Designed dy professional interior designer and well-known artist</p>
                        </div>
                    </div>
                    <div className="top-image-right" >
                        <img src={FacilityImage2} alt="facility"/>
                    </div>
                    <div className="bottom-image-left">
                        <img src={FacilityImage3} alt="facility"  />
                    </div>
                    <div className="bottom-image-right">
                        <img src={FacilityImage4} alt="facility" />
                        <div className="massage-cofe-image-bottom-right" style={{ opacity:this.state.MassageOpacity , transform:this.state.MassegeScele }}>
                            <p className="info-massage-cofe">Prepared only to make our customer feel comfortable </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}