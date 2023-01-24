import React from 'react';
import MainContent from './MainContent';
import Menu from './Menu';
import Facility from './Facility';
import Review from './Review';


function Main() {
    return (
        <div className="content-container">
            <MainContent />
            <Menu />
            <Facility />
            <Review/>
        </div>
    )
}
export default Main;



