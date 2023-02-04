import React from 'react';
import Header from '../global/Header';
import Hero from '../hero';
import Gallery from '../gallery';
import About from '../about';
import Services from '../services';

const MainPage = ({ header }) => {
    return(
        <>
            <Header header={header}/>
            <Hero isBg='' />
            <About isBg='' />
            <Services isBg='' />
            <Gallery isBg='' />
        </>
    )
}

export default MainPage;