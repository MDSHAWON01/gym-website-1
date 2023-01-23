import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_img from '../../assets/hero_image.png';
import hero_img_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'react-countup';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className='hero' id='home'>
            <div className='blur blur-h'></div>

            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '178px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>The best fitness club in the city</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>

                    <div>
                        <div>Ideal Body</div>
                    </div>

                    <div className="span">
                        In here we will help you to shape and build your ideal body and live up your life to fullest
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span> <NumberCounter end={140} start={100} delay='4' prefix='+'></NumberCounter> </span>
                        <span>Coachs</span>
                    </div>
                    <div>
                        <span><NumberCounter end={940} start={800} delay='4' prefix='+'></NumberCounter></span>
                        <span>member joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={0} delay='4' prefix='+'></NumberCounter></span>
                        <span>Fitness Programs</span>
                    </div>

                </div>

                <div className="hero-btn">
                    <button className='btn'>GET STARTED</button>
                    <button className='btn'>LEARN MORE</button>
                </div>

            </div>


            <div className="right-h">
                <button className="btn">Join Me</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span> <span>116 bpm</span>
                </motion.div>

                <img src={hero_img} alt="" className="hero-img" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_img_back} alt="" className="hero-img-back" />

                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span> <span>220 kcal</span>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default Hero;