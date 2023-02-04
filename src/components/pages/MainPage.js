import React from 'react';
import Header from '../global/Header';
import Hero from '../hero';
import Gallery from '../gallery';

const MainPage = ({ header }) => {
    return(
        <>
            <Header header={header}/>
            <Hero isBg='' />
            <Gallery isBg='' />
        </>
    )
}

export default MainPage;