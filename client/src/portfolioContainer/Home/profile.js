import React from 'react'
import myProfilePic from './me.jpg'
import './profile.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper';

export default function Profile() {
    const swiper = useSwiper();
    return (
        <div className='profile-div'>
            <div className='profile-child'>
                <div className='prfl-details'>
                    <h1>Hi there! I'm Gustavo Rodrigues</h1>

                    <h4>Santa Catarina - BR</h4>
                    <t>I'm enthusiast in front-end development and software Q.A engineering</t>
                    <Swiper
                        effect='cards'
                        modules={[EffectCards]}
                        spaceBetween={50}
                        slidesPerView={1}
                        style={{ width: '250px', height: '325px' }}
                    >
                        <SwiperSlide className='profile-card'>
                            <img src={myProfilePic} />
                            <div className='socials'>
                                <a href='https://github.com/gutorafael'>
                                    <i className='fa fa-github'></i>
                                </a>
                                <a href='https://www.linkedin.com/in/rodrigues-gustavo/'>
                                    <i className='fa fa-linkedin'></i>
                                </a>
                                <a href='https://www.instagram.com/guto_rafael_/'>
                                    <i className='fa fa-instagram'></i>
                                </a>
                            </div>
                            <i className='fa fa-graduation-cap' style={{ color: 'white' }}> Bachelor – Information Systems</i>
                            <i className='fa fa-map-marker' style={{ color: 'white', font: 'arial' }}> Santa Catarina – BR</i>
                            <button class="buttonTryIt">
                                <span>Try my work</span>
                            </button>
                            <i className='fa fa-arrow-right right-arrow'></i>
                        </SwiperSlide>
                        <SwiperSlide className='profile-card'>
                            <h1>ABOUT ME</h1>
                            <p>Lorem IPSUM DOLOR</p>
                            <i className='fa fa-arrow-left left-arrow'></i>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}