import React, { Component } from 'react';
import { Web, CameraAlt, Brush } from '@material-ui/icons';
import Nav from './Nav'
import Footer from './Footer'
import TallCard from './TallCard'
import about from '../assets/AboutUsPage/about.png'

class AboutUsPage extends Component {
    state = {}

    render() {
        return (
            <div>
                <Nav />
                <div className='banner bg-white about'>
                    <div className='about__left'>
                        <div className='about__wrapper'>
                            <h2 className='about__title'>We create <b>art</b></h2>
                            <h2 className='about__title'>We deliver <b>results</b></h2>
                            <h2 className='about__title'>We capture <b>moments</b></h2>
                        </div>
                    </div>
                    <div className='about__right'>
                        <div className="about__img-box">
                            <img src={about} alt="About us" className="about__img" />
                        </div>
                    </div>
                </div>
                <section className="container bg-blue about-intro">
                    <h1 className='title-secondary margin-bottom-small'>About Us</h1>
                    <p className='paragraph'>We want to help you build a responsive website at an affordable price!</p>
                    <br />
                    <p className='paragraph margin-bottom-medium'>Every company needs an online prescence. At Webly, we are lowering the cost of getting up and running on the internet and helping more entrepreneurs and creatives to showcase their work online!</p>
                    <div class='about-intro__cards'>
                        <TallCard
                            title='Affordable'
                            description='We deliver results at competitve price points.'
                            icon={Web}
                        />
                        <TallCard
                            title='Quality'
                            description='We pride ourselves on quality!'
                            icon={Web}
                        />
                        <TallCard
                            title='Fast'
                            description='We deliver websites within 2 weeks.'
                            icon={Web}
                        />
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default AboutUsPage;