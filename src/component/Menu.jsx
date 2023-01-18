import React , { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images Favorite 
import Favorite1 from '../images/favorite-coffee.jpg';
import Favorite2 from '../images/late-coffee.jpg';
import Favorite3 from '../images/arabica-coffee.jpg';





export default class Menu extends Component{
    
    render() {
        return (
            <div className='menu' id='menu'>
                <Favorite />
            </div>
        )
    }
}


class Favorite extends Component {

    state = {
        MassageOpacity: 0,
        MassegeScele:"scale(0)",
        startCount: false ,
        Image: Favorite1,
        massageP:"I really love the Cappuccino. the coffee was very smooth",
    }

    CountDataNumber(num) {

        let dataNumber = num.dataset.number;

        const count = setInterval( () => {
            
            if (num.textContent == dataNumber) {
                clearInterval(count)
            }else {
                num.textContent++
            }

        }, 1000 / dataNumber);

    };

    componentDidMount() {
        const section = document.getElementById("favorite-coffee");
        const spans = document.querySelectorAll(".number-place");
        
        window.addEventListener("scroll",() => {
            if (window.scrollY >= section.offsetTop -300) {

                if(!this.state.startCount) { 
                    spans.forEach( (num) => this.CountDataNumber(num) )
                }
                this.setState({
                    startCount:true,
                })
            } 
            if (window.scrollY >= section.offsetTop +150) {
                this.setState({
                    MassageOpacity: 1,
                    MassegeScele:"scale(1)",
                })
            }

            
        })
        AOS.init();
    }

    // buttens Chang Image favorite
    btnCappuccino = (event) => {

        // chang Image
        this.setState({
            Image:Favorite1 ,
            massageP:"I really love the Cappuccino. the coffee was very smooth",
        });

        const el = event.currentTarget;
        const buttons = document.querySelectorAll(".btn-favorite")

        buttons.forEach(el => el.classList.remove('active-btn-menu'));
        el.classList.add("active-btn-menu");

    }

    btnLate = (event) =>  {
        
        // chang Image
        this.setState({
            Image:Favorite2 ,
            massageP:"The coarse texture of brown sugar helps exfoliate the skin and boosts circulation."
        });

        const el = event.currentTarget;
        const buttons = document.querySelectorAll(".btn-favorite");

        buttons.forEach(el => el.classList.remove('active-btn-menu'));
        el.classList.add("active-btn-menu");

    }
    btnArabica = (event) => {

        // chang Image
        this.setState({
            Image:Favorite3 ,
            massageP:"aBelieve it or not, coffee has the fantastic ability to tone your skin and reduce cellulite. ",
        });

        const el = event.currentTarget;
        const buttons = document.querySelectorAll(".btn-favorite")

        buttons.forEach(el => el.classList.remove('active-btn-menu'));
        el.classList.add("active-btn-menu");

    }

    render() {
        return (
            <div className='favorite-coffee' id='favorite-coffee'>
                <div className='places-list'>
                    <p data-aos="fade-up"  data-aos-duration="1500">enjoy your coffee in our comfortable place </p>
                    <div className='places-item'>
                        <div className='item'>
                            <div className='main-number-place'>
                                <span className='number-place' data-number='25'> 0</span>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <span className='info-place'>private room</span>
                        </div>
                        <div className='item'>
                            <div className='main-number-place'>
                                <span className='number-place' data-number='40'> 0 </span>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <span className='info-place'>event space</span>
                        </div>
                        <div className='item'>
                            <div className='main-number-place'>
                                <span className='number-place' data-number='15'> 0 </span>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <span className='info-place'> creative studio</span>
                        </div>
                    </div>
                </div>
                <div className='favorite-list'>
                    <div className='image-favorite'>
                        <img src={this.state.Image} alt='menu'/>
                            <div className='massage-favorite' style={{ opacity:this.state.MassageOpacity , transform:this.state.MassegeScele }}>
                            <span>
                                <i className="fa-regular fa-heart"></i>
                            </span>
                            <p> {this.state.massageP} </p>
                        </div>
                    </div>
                    <div className='info-favorite'>
                        <h2 data-aos="fade-up"  data-aos-duration="1500">
                            <span data-aos="fade-up"  data-aos-duration="500">our coffee</span>
                            chose your favorite coffee
                        </h2>
                        <p data-aos="fade-up"  data-aos-duration="3000"> more than 100+ type of coffee
                            are ready to serve by our professionals.
                        </p>
                        <div className='list-coffee' data-aos="fade-up"  data-aos-duration="3000">
                            <button className='btn-favorite active-btn-menu' onClick={this.btnCappuccino}> Cappuccino</button>
                            <button className='btn-favorite' onClick={this.btnLate}>late</button>
                            <button className='btn-favorite' onClick={this.btnArabica}>arabica</button>
                        </div>
                        <button className='more-favorite'> more menu</button>
                    </div>
                </div>
            </div>
        )
    }
}


