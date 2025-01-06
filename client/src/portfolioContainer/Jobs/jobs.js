import React, { useState } from 'react';
import './jobs.css';
import itbsPic from './itbs.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';




export default function Jobs() {
    return (
        <div className='jobContainer'>
            <div className='title'>
                <h1>Experience</h1>
                <h2>Where I Worked/Work</h2>
                <hr></hr>
            </div>
            <div className='cardsContainer'>
                <div className='card'>
                    <img src={itbsPic}></img>
                    <p className='cardDate'>Jan/2023 – Jul/2024</p>
                    <hr style={{
                        border: 'none', height: '5px', backgroundColor: '#187A3B', width: '90%', margin: '-5px 0 -10px -10.2px', borderRadius: '0 10px 10px 0'
                    }} />
                    <h2>R&D Trainee</h2>
                    <p>Validations, web development, direct intelbras key accounts client support and a little of task management<br /><br />
                        <strong>Skills: </strong>ReactJs, Python and Shell Script</p>
                </div>
                <div className='card'>
                    <img src={itbsPic}></img>
                    <p className='cardDate'>Jul/2024 – Currently</p>
                    <hr style={{
                        border: 'none', height: '5px', backgroundColor: '#187A3B', width: '90%', margin: '-5px 0 -10px -10.2px', borderRadius: '0 10px 10px 0'
                    }} />
                    <h2>R&D Assistant</h2>
                    <p>Test jig valdations and development, line production support, client support, item register on intelbras system's.<br /><br />
                        <strong>Skills: </strong>Python, RobotFramework, MySQL</p>
                </div>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
            >
                <SwiperSlide>
                    <div className='swiperCard'>
                        <div className='swiperCardHeader'>
                            <i class="fa fa-coffee" aria-hidden="true"></i>
                            <h2>In progress...</h2>
                        </div>
                        <a><i className='fa fa-github'></i> See the project on github</a><br/><br/>
                        <p>This project is in progress, it may be in the briefing or idea phase or even in the finalization of the final details!
                            Please grab a coffee and wait :)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiperCard'>
                        <div className='swiperCardHeader'>
                            <i class="fa fa-coffee" aria-hidden="true"></i>
                            <h2>In progress...</h2>
                        </div>
                        <a><i className='fa fa-github'></i> See the project on github</a><br/><br/>
                        <p>This project is in progress, it may be in the briefing or idea phase or even in the finalization of the final details!
                            Please grab a coffee and wait :)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swiperCard'>
                        <div className='swiperCardHeader'>
                            <i class="fa fa-coffee" aria-hidden="true"></i>
                            <h2>In progress...</h2>
                        </div>
                        <a><i className='fa fa-github'></i> See the project on github</a><br/><br/>
                        <p>This project is in progress, it may be in the briefing or idea phase or even in the finalization of the final details!
                            Please grab a coffee and wait :)</p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}