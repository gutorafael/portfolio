import React from 'react'
import myProfilePic from './me.jpg'
import myLogoPic from './Outline_Image_White.png'
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
                            <img src={myProfilePic} className='profile-image' />
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
                            <div className='details'>
                                <div className='details'>
                                    <i className='fa fa-graduation-cap'><span> Bachelor – Information Systems</span></i>
                                    <i className='fa fa-map-marker'><span>&nbsp;&nbsp;&nbsp;Santa Catarina – BR</span></i>
                                </div>
                            </div>
                            <button class="buttonTryIt" style={{left: '15px', bottom: '15px',position: 'absolute'}}>
                                <span>Try my work</span>
                            </button>
                            <i className='fa fa-arrow-right right-arrow'></i>
                        </SwiperSlide>
                        <SwiperSlide className='profile-card'>
                            <div className='cardHeader'>
                                <h1>ABOUT ME</h1>
                                <p>I’ve always been passionate about technology. Currently, I’m focusing on front-end programming and automated testing with Robot Framework, with over two years of experience in R&D and a budding interest in IT management</p>
                            </div>
                            <button class="circleButton" style={{right: '15px', bottom: '15px',position: 'absolute'}}>
                                <i className='fa fa-download'></i>
                            </button>
                            <i className='fa fa-arrow-left left-arrow'></i>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}