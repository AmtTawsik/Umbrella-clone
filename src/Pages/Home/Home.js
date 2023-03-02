import React from 'react';
import Hero from '../Hero/Hero';
import Feature from '../Feature/Feature';
import Accordian from '../Accordian/Accordian';
import Carasol from '../Carasol/Carasol';
import CTA from '../CTA/CTA';
import Social from '../Social/Social';
import Prising from '../Prising/Prising';
import ContactUs from '../ContactUs/ContactUs';
import Smarter from '../Smarter/Smarter';
import Money from '../Money/Money';
import Subscribe from '../Subscribe/Subscribe';
import Timeline from '../Timeline/Timeline';
import HowWork from '../HowWork/HowWork';
import Question from '../Question/Question';
import Calculator from '../Calculator/Calculator';
import Ready from '../Ready/Ready';
import Post from '../Post/Post';
import Need from '../Need/Need';

const Home = () => {
    return (
        <div className='bg-white w-11/12 mx-auto'>
            <Hero></Hero>
            <Timeline></Timeline>
            <HowWork></HowWork>
            <Question></Question>
            <Calculator></Calculator>
            <Ready></Ready>
            <Carasol></Carasol>
            <Post></Post>
            <Need></Need>
        </div>
    );
};

export default Home;