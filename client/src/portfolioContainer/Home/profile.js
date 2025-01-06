import React, { useState } from 'react';
import myProfilePic from './me.jpg';
import myResumeDoc from './Resume_CV_Gustavo.docx.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiRobotframework } from "react-icons/si";
import { faReact, faGolang, faFlutter } from '@fortawesome/free-brands-svg-icons';
import './profile.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';

export default function Profile() {
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleDownloadClick = () => {
        const pdfUrl = myResumeDoc;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume_CV_Gustavo';
        link.click();

        setIsDownloaded(true);

        setTimeout(() => {
            setIsDownloaded(false);
        }, 2000);
    };

    return (
        <div className='profile-div' style={{backgroundColor: '#222826'}}>
            <div className='profile-child'>
                <div className='prfl-details'>
                    <h1>Hi there! <br />I'm <span style={{ color: '#187A3B' }}>Gustavo Rodrigues</span></h1>
                    <hr style={{
                        border: 'none', height: '12px', backgroundColor: '#187A3B', width: '100%', margin: '10px 0 10px -20px', borderRadius: '0 10px 10px 0'
                    }} />
                    <hr style={{
                        border: 'none', height: '7px', backgroundColor: '#187A3B', width: '64%', margin: '10px 0 10px -20px', borderRadius: '0 10px 10px 0'
                    }} />
                    <h2>A enthusiast in front-end development and software Q.A engineering</h2>
                    <div className='biography'>
                        <p>Currently, I have substantial experience in development with Flutter. I am also learning GoLang to enhance my skills in back-end development,
                            particularly for building scalable APIs and automation scripts. However, my primary focus is on Robot Framework and React.js, where I leverage Robot Framework,
                            particularly with Selenium, for implementing automated testing. React.js is central to my work in building dynamic, high-performance web applications.</p>
                        <div className='iconContainer'>
                            <a href='https://robotframework.org/' target="_blank"><SiRobotframework /></a>
                            <a href='https://react.dev/' target="_blank"><FontAwesomeIcon icon={faReact} /></a>
                            <a href='https://go.dev/' target="_blank"><FontAwesomeIcon icon={faGolang} /></a>
                            <a href='https://flutter.dev/' target="_blank"><FontAwesomeIcon icon={faFlutter} /></a>
                        </div>
                    </div>
                </div>
                <div className='cardContainer'>
                    <Swiper
                        effect='cards'
                        modules={[EffectCards]}
                        spaceBetween={50}
                        slidesPerView={1}
                        style={{ width: '250px', height: '325px' }}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                    >
                        <SwiperSlide className='profile-card'>
                            <img src={myProfilePic} className='profile-image' alt="Profile" />
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
                            <button className="buttonTryIt" style={{ left: '15px', bottom: '15px', position: 'absolute' }}>
                                <span>Try my work</span>
                            </button>
                            <i
                                className='fa fa-arrow-right right-arrow'
                                onClick={() => swiperInstance?.slideNext()}
                            ></i>
                        </SwiperSlide>
                        <SwiperSlide className='profile-card'>
                            <div className='cardHeader'>
                                <h1>ABOUT ME</h1>
                                <p>I’ve always been passionate about technology.
                                    Currently, I’m focusing on front-end programming and automated testing with Robot Framework,
                                    with over two years of experience in R&D and a budding interest in IT management.</p>
                                <p style={{ textAlign: 'end', fontWeight: 'bold' }}>Download my resume below</p>
                            </div>
                            <button
                                className={`circleButton ${isDownloaded ? 'clicked' : ''}`}
                                style={{ right: '15px', bottom: '15px', position: 'absolute' }}
                                onClick={handleDownloadClick}
                            >
                                {isDownloaded ? 'Thx :)' : <i className="fa fa-download"></i>}
                            </button>
                            <i
                                className='fa fa-arrow-left left-arrow'
                                onClick={() => swiperInstance?.slidePrev()}
                            ></i>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
