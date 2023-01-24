import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import ImageUser1 from '../images/user-1.jpg';
import ImageUser2 from '../images/user-2.png';
import ImageUser3 from '../images/user-3.jpg';
import ImageUser4 from '../images/user-4.jpg';
import ImageUser5 from '../images/user-5.png';


export default class Review extends Component {

    state = {
        numScroll: 0,
        btnNextClass: "valid",
        btnBeforeClass: "not-valid",
        userActive: 2,
    }
    number = 1;

    beforeUser = () => {
        const users = document.querySelectorAll(".review-user");

        if (this.state.numScroll == 0 ) {

            this.setState({
                btnBeforeClass: "not-valid",
                btnNextClass: "valid",
            })
        } else {
            this.setState({
                btnBeforeClass: "valid",
                btnNextClass: "valid" ,
                numScroll: this.state.numScroll - 300,
            })
            this.number--
            users.forEach(el => el.classList.remove('active-user'));
            document.getElementById(`user-${this.number}`).classList.add('active-user');

        }
    }

    nextUser = () => {
    const users = document.querySelectorAll(".review-user");

        if (this.state.numScroll == 900  ) {

            this.setState({
                btnNextClass: "not-valid",
                btnBeforeClass: "valid",
            })
        } else {
            this.setState({
                btnNextClass: " valid",
                btnBeforeClass: "valid",
                numScroll: this.state.numScroll + 300,
            })

            this.number++
            users.forEach(el => el.classList.remove('active-user'));
            document.getElementById(`user-${this.number}`).classList.add('active-user');

        }
    }

    componentDidMount() {
        AOS.init();
    }


    render() {
        return (
            <div className="review" id="review">
                <div className="list-review">
                    <div className="text-review">
                        <h2 className="title-review" data-aos="fade-up"  data-aos-duration="1500">
                            <span className="fitst-title-review" data-aos="fade-up"  data-aos-duration="500"> our review</span>
                            Let our customer talk about us
                        </h2>
                        <p className="info-review" data-aos="fade-right"  data-aos-duration="1500">
                            we always providing the best to make our customer pleasent with our services
                        </p>
                        <div className="buttons-review" data-aos="fade-up"  data-aos-duration="3000">
                            <button className={`before ${this.state.btnBeforeClass}`} onClick={this.beforeUser}>before</button>
                            <button className={`next ${this.state.btnNextClass}`} onClick={this.nextUser}>next</button>
                        </div>
                    </div>
                    <div className="reviews">
                        <div className="users-list" style={{ transform :`translateX(-${this.state.numScroll}px)`}}>
                            <div className="review-user active-user" id="user-1" data-aos="zoom-out"  data-aos-duration="1500" >
                                <p className="user-massage">
                                    I really love the arabica. the coffee was very smooth.
                                    I really love the arabica. the coffee was very smooth.
                                    I really love the arabica.
                                </p>
                                <div className="from-user">
                                    <div className="info-user">
                                        <span className="name-user"> michael jack</span>
                                        <span className="about-user">-coffee lover</span>
                                    </div>
                                    <img src={ImageUser1} alt="user" />

                                </div>
                            </div>
                            <div className="review-user" id="user-2" data-aos="zoom-out-left"  data-aos-duration="3000" >
                                <p className="user-massage">
                                    I really love the arabica. the coffee was very smooth.
                                    I really love the arabica. the coffee was very smooth.
                                    I really love the arabica.
                                </p>
                                <div className="from-user">
                                    <div className="info-user">
                                        <span className="name-user">donald duckison</span>
                                        <span className="about-user">-creative media</span>
                                    </div>
                                    <img src={ImageUser2} alt="user" />
                                </div>
                            </div>
                            <div className="review-user" id="user-3">
                                <p className="user-massage">
                                    I really love the arabica. the coffee was very smooth.
                                    I really love the arabica. the coffee was very smooth.
                                    I really love the arabica.
                                </p>
                                <div className="from-user">
                                    <div className="info-user">
                                        <span className="name-user">hisham khaled</span>
                                        <span className="about-user"> -coffee lover</span>
                                    </div>
                                    <img src={ImageUser3} alt="user" />
                                </div>
                            </div>
                            <div className="review-user" id="user-4">
                                <p className="user-massage">
                                    I really love the arabica. the coffee was very smooth.
                                    I really love the arabica. the coffee was very smooth.
                                    I really love the arabica.
                                </p>
                                <div className="from-user">
                                    <div className="info-user">
                                        <span className="name-user">donald duckison</span>
                                        <span className="about-user">-creative media</span>
                                    </div>
                                    <img src={ImageUser4} alt="user" />
                                </div>
                            </div>
                            <div className="review-user" id="user-5">
                                <p className="user-massage">
                                    I really love the arabica. the coffee was very smooth.
                                    I really love the arabica. the coffee was very smooth.
                                    I really love the arabica.
                                </p>
                                <div className="from-user">
                                    <div className="info-user">
                                        <span className="name-user">hisham khaled</span>
                                        <span className="about-user"> -coffee lover</span>
                                    </div>
                                    <img src={ImageUser5} alt="user" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="location-cafe">
                    <h3> take your coffee now</h3>
                    <p> don't let <span> coffee </span> cold .let's go to <span> coffee </span>  and get your <span> coffee </span> and boost your day now</p>
                    <button className="btn-location"> our location </button>
                </div>
            </div>
        )
    }
}


