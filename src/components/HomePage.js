import React, { Component } from 'react'
import { Web, CameraAlt, Brush } from '@material-ui/icons';
import { Bounce, Fade } from 'react-reveal'
import Footer from './Footer'
import ScrollTopButton from './ScrollTopButton'
import IconCard from './IconCard'
import logo from '../assets/HomePage/logo.png'
import video from '../assets/HomePage/webly.mp4'
import dscnus2 from '../assets/HomePage/dscnus2.png'
import babybiome1 from '../assets/HomePage/babybiome1.png'
import babybiome2 from '../assets/HomePage/babybiome2.png'
import aurigamart1 from '../assets/HomePage/aurigamart1.png'
import photo1 from '../assets/HomePage/photo1.jpg'
import photo2 from '../assets/HomePage/photo2.jpg'
import photo3 from '../assets/HomePage/photo3.jpg'
import photo4 from '../assets/HomePage/photo4.jpg'
import photo5 from '../assets/HomePage/photo5.jpg'
import design1 from '../assets/HomePage/design1.png'
import design2 from '../assets/HomePage/design2.jpg'
import design3 from '../assets/HomePage/design3.jpg'
import design4 from '../assets/HomePage/design4.jpg'
import design5 from '../assets/HomePage/design5.png'
import ResponsiveNav from './ResponsiveNav';

class HomePage extends Component {
    state = {
        scroll: false
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        if (window.pageYOffset > 0) {
            if (!this.state.scrollClassName) {
                this.setState({ scrollClassName: true });
            }
        } else {
            if (this.state.scrollClassName) {
                this.setState({ scrollClassName: false });
            }
        }
    }

    render() {

        return (
            <div>
                <ResponsiveNav scroll={this.state.scrollClassName} />
                <ScrollTopButton scroll={this.state.scrollClassName} />
                <section className='container bg-black'>
                    <div className='banner'>

                        <div className='home__logo'>
                            <Bounce top>
                                <div className="home__img-box">
                                    <img src={logo} alt='Webly logo' className='home__img'></img>
                                </div>
                            </Bounce>
                            <Fade bottom delay={500}>
                                <h1 className='home__title'>Webly</h1>
                            </Fade>
                            <Fade bottom delay={1000}>
                                <p className='home__subtitle text-align-center'>Web &amp; Graphic design</p>
                            </Fade>
                        </div>
                    </div>
                </section>
                <section className="container section-services">
                    <Fade right>
                        <h2 className='title-secondary margin-bottom-large text-align-right'>Our Services</h2>
                    </Fade>
                    <div className="services">
                        <div className='services__left'>
                            <Fade clear delay={200}>
                                <div className="margin-bottom-medium">
                                    <IconCard
                                        title='Web Development'
                                        description='Great Content, Awesome Design, Transparent Pricing'
                                        icon={Web}
                                    />
                                </div>
                            </Fade>
                            <Fade clear delay={400}>
                                <div className="margin-bottom-medium">
                                    <IconCard
                                        title='Photography'
                                        description='Professional Events and Portrait Photography'
                                        icon={CameraAlt}
                                    />
                                </div>
                            </Fade>
                            <Fade clear delay={600}>
                                <div className="margin-bottom-medium">
                                    <IconCard
                                        title='Graphic Design'
                                        description='We create customised logos, banners, flyers and many more!'
                                        icon={Brush}
                                    />
                                </div>
                            </Fade>
                        </div>
                        <div className='services__right'>
                            <video controls className='services__video'>
                                <source src={video} type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>
                <section className='section-web bg-white'>
                    <div className='web'>
                        <div className="web__left">
                            <div className='web__title-box'>
                                <Fade left>
                                    <h3 className='title-tertiary margin-bottom-small'>Web Development</h3>
                                </Fade>
                            </div>
                            <Fade clear delay={200}>
                                <div className='web__content-box'>
                                    <p className='margin-bottom-small'><span className='number text-pink-gradient'>$600</span> <b>onwards</b></p>
                                    <hr className='hr margin-bottom-medium' />
                                    <p className='paragraph'>Your website is your first customer touchpoint! </p>
                                    <br />
                                    <p className='paragraph'>At Webly, we design websites with the aim of converting visitors to customers for our clients. </p>
                                    <br />
                                    <p className='paragraph'>Our core design principal is centred around customer centricity and we will work with you to develop a tailored brand strategy!</p>
                                </div>
                            </Fade>
                        </div>
                        <div className="web__right">
                            <div className="gallery-4x3">
                                <figure className="gallery-4x3__item gallery-4x3__item--1">
                                    <img src={aurigamart1} alt="aurigamart" className="gallery-4x3__img" />
                                </figure>
                                <figure className="gallery-4x3__item gallery-4x3__item--2">
                                    <img src={babybiome1} alt="babybiome" className="gallery-4x3__img" />
                                </figure>
                                <figure className="gallery-4x3__item gallery-4x3__item--3">
                                    <img src={babybiome2} alt="babybiome" className="gallery-4x3__img" />
                                </figure>
                                <figure className="gallery-4x3__item gallery-4x3__item--4">
                                    <img src={dscnus2} alt="dscnus" className="gallery-4x3__img" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-web bg-grey'>
                    <div className='web'>
                        <div className="web__right">
                            <div className="gallery-3x3">
                                <figure className="gallery-3x3__item gallery-3x3__item--1">
                                    <img src={photo5} alt="photography pictures" className="gallery-3x3__img" />
                                </figure>
                                <figure className="gallery-3x3__item gallery-3x3__item--2">
                                    <img src={photo2} alt="photography pictures" className="gallery-3x3__img" />
                                </figure>
                                <figure className="gallery-3x3__item gallery-3x3__item--3">
                                    <img src={photo3} alt="photography pictures" className="gallery-3x3__img" />
                                </figure>
                                <figure className="gallery-3x3__item gallery-3x3__item--4">
                                    <img src={photo4} alt="photography pictures" className="gallery-3x3__img" />
                                </figure>
                                <figure className="gallery-3x3__item gallery-3x3__item--5">
                                    <img src={photo1} alt="photography pictures" className="gallery-3x3__img" />
                                </figure>
                            </div>
                        </div>
                        <div className="web__left">
                            <div className="web__title-box web__title-box--right">
                                <Fade right>
                                    <h3 className="title-tertiary margin-bottom-small">Photography</h3>
                                </Fade>
                            </div>
                            <Fade clear delay={200}>
                                <div className="web__content-box web__content-box--right">
                                    <p className='margin-bottom-small'><span className='number text-pink-gradient'>$60/hr</span></p>
                                    <hr className='hr hr-right margin-bottom-medium' />
                                    <p className='paragraph'>A picture speaks a thousand words! </p>
                                    <br />
                                    <p className='paragraph'>Webly provides events photography packages to capture the best visual content for your marketing requirements!</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>
                <section className='section-web bg-white'>
                    <div className='web'>
                        <div className="web__left">
                            <div className="web__title-box web__title-box--blue">
                                <Fade left>
                                    <h3 className="title-tertiary margin-bottom-small">Graphic Design</h3>
                                </Fade>
                            </div>
                            <Fade clear delay={200}>
                                <div className="web__content-box">
                                    <p className='margin-bottom-small'><span className='number text-pink-gradient'>$60</span> <b>onwards</b></p>
                                    <hr className='hr margin-bottom-medium' />
                                    <p className='paragraph'>The internet is a noisy place.</p>
                                    <br />
                                    <p className='paragraph'>Rise above the noise with clean, impactful graphics!</p>
                                </div>
                            </Fade>
                        </div>
                        <div className="web__right">
                            <div className="gallery-3x2">
                                <figure className="gallery-3x2__item gallery-3x2__item--1">
                                    <img src={design1} alt="design" className="gallery-3x2__img" />
                                </figure>
                                <figure className="gallery-3x2__item gallery-3x2__item--2">
                                    <img src={design2} alt="design" className="gallery-3x2__img" />
                                </figure>
                                <figure className="gallery-3x2__item gallery-3x2__item--3">
                                    <img src={design5} alt="design" className="gallery-3x2__img" />
                                </figure>
                                <figure className="gallery-3x2__item gallery-3x2__item--4">
                                    <img src={design4} alt="design" className="gallery-3x2__img" />
                                </figure>
                                <figure className="gallery-3x2__item gallery-3x2__item--5">
                                    <img src={design3} alt="design" className="gallery-3x2__img" />
                                </figure>
                                <figure className="gallery-3x2__item gallery-3x2__item--6">
                                    <img src={logo} alt="design" className="gallery-3x2__img" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default HomePage;