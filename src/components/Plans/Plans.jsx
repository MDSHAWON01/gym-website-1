import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    return (
        <div className='plan-container'>
            <div className="blur plan-blur1"></div>
            <div className="blur plan-blur2"></div>

            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITHUS</span>
            </div>

            <div className="plans">
                {plansData.map((plan, index) => (
                    <div className="plan" key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, index) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={index}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benifits -> </span>
                        </div>
                        <button className="btn">Join Now</button>
                    </div>
                ))}
            </div>



        </div>
    );
};

export default Plans;