import React,{Component} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import ImageHome from '../images/home-image.jpg';


export default class MainContent extends Component {
    
    LoadingPageImage() {
        document.querySelector(' .main-content .main-image-content').classList.add('active-image');
    }
    
    componentDidMount() {

        AOS.init();
    }

    render() {
        return (
            <div className='main-content' id="home" onLoad={this.LoadingPageImage}>
                <div className='main-text' >
                    <h1 data-aos="fade-up"  data-aos-duration="500">
                        <span>coffee</span>
                        enjoy your morning coffee.
                    </h1>
                    <p data-aos="fade-up"  data-aos-duration="1500">
                        Boost your productivity and build your mood
                        with a glass of coffee in the morning
                    </p>
                    <button className='btn-get-now' data-aos="fade-up"  data-aos-duration="3000"> get your now</button>
                    <button className='btn-reservation' data-aos="fade-up"  data-aos-duration="3000"> reservation</button>
                </div>
                <div className='main-image-content'  >
                    <img src= {ImageHome} alt="home" />
                </div>
            </div>
        )
    }

}