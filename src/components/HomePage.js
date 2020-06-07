import React, { Component } from 'react'
import { Web, CameraAlt, Brush } from '@material-ui/icons';
import Nav from './Nav'
import Footer from './Footer'
import IconCard from './IconCard'
import logo from '../assets/HomePage/logo.png'
import video from '../assets/HomePage/webly.mp4'

class HomePage extends Component {
    state = {}

    render() {
        return (
            <div>
                <Nav />
                <section className='container bg-black'>
                    <div className='banner'>
                        <div className='home__logo'>
                            <div className="home__img-box">
                                <img src={logo} alt='Webly logo' className='home__img'></img>
                            </div>
                            <h1 className='home__title'>Webly</h1>
                            <p className='home__subtitle'>Web &amp; Graphic design</p>
                        </div>
                    </div>
                </section>
                <section className="container section-services">
                    <h2 className='title-secondary margin-bottom-large text-align-right'>Our Services</h2>
                    <div className="services">
                        <div className='services__left'>
                            <div className="align-left margin-bottom-medium">
                                <IconCard
                                    title='Web Development'
                                    description='Great Content, Awesome Design, Transparent Pricing'
                                    icon={Web}
                                />
                            </div>
                            <div className="align-right margin-bottom-medium">
                                <IconCard
                                    title='Photography'
                                    description='Professional Events and Portrait Photography'
                                    icon={CameraAlt}
                                />
                            </div>
                            <div className="align-left margin-bottom-medium">
                                <IconCard
                                    title='Graphic Design'
                                    description='We create customised logos, banners, flyers and many more!'
                                    icon={Brush}
                                />
                            </div>
                        </div>
                        <div className="services__right">
                            <video width="560" controls>
                                <source src={video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                </video>
                        </div>
                    </div>
                </section>
                <section className='section-web bg-white'>
                    <div className='web'>
                        <div className="web__left">
                            <div className="web__title-box">
                                <h3 className="title-tertiary margin-bottom-small">Web Development</h3>
                            </div>
                            <div className="web__content-box">
                                <p className='margin-bottom-small'><span className='number text-pink-gradient'>$600</span> <b>onwards</b></p>
                                <hr className='hr margin-bottom-medium' />
                                <p className='paragraph'>Your website is your first customer touchpoint! </p>
                                <br />
                                <p className='paragraph'>At Webly, we design websites with the aim of converting visitors to customers for our clients. </p>
                                <br />
                                <p className='paragraph'>Our core design principal is centred around customer centricity and we will work with you to develop a tailored brand strategy!</p>
                            </div>
                        </div>
                        <div className="web__right">
                            Pictures
                        </div>
                    </div>
                </section>
                <section className='section-web bg-grey'>
                    <div className='web'>
                        <div className="web__right">
                            Pictures
                        </div>
                        <div className="web__left">
                            <div className="web__title-box web__title-box--right">
                                <h3 className="title-tertiary margin-bottom-small">Photography</h3>
                            </div>
                            <div className="web__content-box web__content-box--right">
                                <p className='margin-bottom-small'><span className='number text-pink-gradient'>$60/hr</span></p>
                                <hr className='hr hr-right margin-bottom-medium' />
                                <p className='paragraph'>A picture speaks a thousand words! </p>
                                <br />
                                <p className='paragraph'>Webly provides events photography packages to capture the best visual content for your marketing requirements!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-web bg-white'>
                    <div className='web'>
                        <div className="web__left">
                            <div className="web__title-box web__title-box--blue">
                                <h3 className="title-tertiary margin-bottom-small">Graphic Design</h3>
                            </div>
                            <div className="web__content-box">
                                <p className='margin-bottom-small'><span className='number text-pink-gradient'>$60</span> <b>onwards</b></p>
                                <hr className='hr margin-bottom-medium' />
                                <p className='paragraph'>The internet is a noisy place.</p>
                                <br />
                                <p className='paragraph'>Rise above the noise with clean, impactful graphics!</p>
                            </div>
                        </div>
                        <div className="web__right">
                            Pictures
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default HomePage;