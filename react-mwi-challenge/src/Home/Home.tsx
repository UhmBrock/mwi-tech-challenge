import Navbar from '../Navbar/Navbar'
import React from 'react';

type HomeProps = {

};

const Home = ({}: HomeProps): JSX.Element => {

    return (
        <>
            <Navbar linkAddress="/contact" linkDisplayName="contact"/> 
        </>
    )
}

export default Home;
