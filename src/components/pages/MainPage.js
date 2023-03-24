import React from 'react';
import Header from '../global/Header';
import Hero from '../hero';
import Gallery from '../gallery';
import About from '../about';
import Services from '../services';
import Testimonial from '../testimonial';
import Contact from '../contact';
import Ctav3 from '../ctav3';
import Footer from '../global/footer';

const MainPage = ({ header, footer }) => {  
    return(
        <>
            <Header header={header}/>
            <Hero isBg='' />
            <About isBg='yes' />
            <Services isBg='' />
            <Gallery isBg='yes' />
            <Testimonial isBg='' />
            <Contact isBg='yes' />
            <Ctav3 isBg='' />
            <Footer isBg='yes' footer={footer} />
        </>
    )
}

export default MainPage;