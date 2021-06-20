import React from 'react';

import Header from '../Components/Header';
import SlideShow from "../Components/SlideShow";
import About from "../Components/About"
import Services from "../Components/Services"
import Products from "../Components/Products"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <SlideShow />

            <div className="container">
                <div id="bottom"></div>
                <About />
                <Services/>
                <Products />
                <Contact />
            </div>

            <Footer />

        </div>
    )
}
export default Home;