
import React, { Component } from 'react';

import Logo1 from '../images/dark-logo.png';
import Logo2 from '../images/light-logo.png';





export default class Header extends Component {
    
    state = {
        background: "none",
        logo: Logo1,
        linkColor: "grey",
        iconPhone:"black",
        
    }

    openListLinks = () => {
        document.getElementById("btn-nav-list").classList.toggle("opened")
        document.querySelector('#links-nav').classList.toggle('active-nav')
    }

    RemoveClassActive = () => {
        document.getElementById("btn-nav-list").classList.remove("opened")
        document.querySelector('#links-nav').classList.remove('active-nav')
    }

    changBackground = () => {
        if (window.scrollY > 150) {
            this.setState({
                background: "black",
                logo: Logo2,
                linkColor: "white",
                iconPhone:"grey",
            })
        } else {
            this.setState({
                background: "none",
                logo: Logo1,
                linkColor: "grey",
                iconPhone:"black",
                
            })
        }
    }

    componentDidMount() {
        window.addEventListener("scroll",this.changBackground)
    }


    render() {
        return (
            <header style={{ background: this.state.background }}>
                <div className="logo">
                    <img src={this.state.logo} alt="imageLogo" />
                </div>
                <div className="links" id="links-nav">
                    <a href="#home"
                        onClick={this.RemoveClassActive}
                        style={{ color: this.state.linkColor }}
                        className="link-nav">
                        <span>Home</span>
                    </a>
                    <a href="#menu"
                        onClick={this.RemoveClassActive}
                        style={{ color: this.state.linkColor }}
                        className="link-nav">
                        <span> menu</span>
                    </a>
                    <a href="#facility"
                        onClick={this.RemoveClassActive}
                        style={{ color: this.state.linkColor }}
                        className="link-nav">                        
                        <span>facility</span>
                    </a>
                    <a href="#review"
                        onClick={this.RemoveClassActive}
                        style={{ color: this.state.linkColor }}
                        className="link-nav">
                        <span>Review</span>
                    </a>
                </div>
                <div className="nav-contact">
                    <button className="btn-nav-list" id='btn-nav-list' onClick={this.openListLinks} >
                        <svg width="45" height="50" viewBox="0 0 100 100" st="true">
                            <path className="line_1 " stroke= {this.state.linkColor} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line_2 " stroke= {this.state.linkColor} d="M 20,50 H 80" />
                            <path className="line_3 " stroke= {this.state.linkColor} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                    <a href="tel:02010022552041" style={{ color: this.state.linkColor }} className='phone-number'>
                        <i className="fa-solid fa-phone" style={{ color: this.state.iconPhone }}></i>
                        <span>(+02) 0100-2255-2041</span>
                    </a>
                </div>
            </header>
        )
    }
};