
import React from "react";
import Header from './Header';
import MainPage from './Container';
import Footer from './Footer';


function Container() {
    return (
        <div className='container'>
            <Header />
            <MainPage />
            <Footer />
        </div>
    )
}

export default Container;