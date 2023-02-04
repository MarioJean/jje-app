import React from 'react';
import Header from '../global/Header';
import Hero from '../hero';
import Gallery from '../gallery';
import About from '../about';

const MainPage = ({ header }) => {
    return(
        <>
            <Header header={header}/>
            <Hero isBg='' />
            <About isBg='' />
            <Gallery isBg='' />
        </>
    )
}

export default MainPage;