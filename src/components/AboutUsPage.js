import React, { Component } from 'react';
import { LocalAtm, ThumbUpAlt, Schedule } from '@material-ui/icons';
import { Fade } from 'react-reveal'
import Footer from './Footer'
import TallCard from './TallCard'
import AvatarCard from './AvatarCard'
import about from '../assets/AboutUsPage/about.png'
import alicia from '../assets/AboutUsPage/alicia.png'
import shermaine from '../assets/AboutUsPage/shermaine.jpg'
import team from '../assets/AboutUsPage/team.png'
import ResponsiveNav from './ResponsiveNav';

class AboutUsPage extends Component {
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
            if (!this.state.scroll) {
                this.setState({ scroll: true });
            }
        } else {
            if (this.state.scroll) {
                this.setState({ scroll: false });
            }
        }
    }

    render() {
        return (
            <div>
                <ResponsiveNav scroll={this.state.scroll} />
                <div className="container">
                    <div className='banner bg-white about'>
                        <div className='about__left'>
                            <div className='about__wrapper'>
                                <Fade left><h2 className='about__title'>We create <b>art</b></h2></Fade>
                                <Fade left delay={200}><h2 className='about__title'>We deliver <b>results</b></h2></Fade>
                                <Fade left delay={400}><h2 className='about__title'>We capture <b>moments</b></h2></Fade>
                            </div>
                        </div>
                        <div className='about__right'>
                            <div className="about__img-box">
                                <img src={about} alt="About us" className="about__img" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="container bg-blue section-intro">
                    <div className='margin-bottom-medium'>
                        <Fade top>
                            <h1 className='title-secondary margin-bottom-small'>About Us</h1>
                        </Fade>
                        <Fade top delay={200}>
                            <p className='paragraph'>We want to help you build a responsive website at an affordable price!</p>
                            <br />
                            <p className='paragraph'>Every company needs an online prescence. At Webly, we are lowering the cost of getting up and running on the internet and helping more entrepreneurs and creatives to showcase their work online!</p>
                        </Fade>
                    </div>
                    <div className='section-intro__cards'>
                        <Fade clear delay={200}>
                            <TallCard
                                title='Affordable'
                                description='We deliver results at competitve price points.'
                                icon={LocalAtm}
                            />
                        </Fade>
                        <Fade clear delay={400}>
                            <TallCard
                                title='Quality'
                                description='We pride ourselves on quality!'
                                icon={ThumbUpAlt}
                            />
                        </Fade>
                        <Fade clear delay={600}>
                            <TallCard
                                title='Fast'
                                description='We deliver websites within 2 weeks.'
                                icon={Schedule}
                            />
                        </Fade>
                    </div>
                </section>
                <section className='container bg-grey section-team'>
                    <div className='margin-bottom-medium'>
                        <Fade top>
                            <h1 className='title-secondary margin-bottom-small'>Core Team</h1>
                        </Fade>
                        <Fade top delay={200}>
                            <p className='paragraph'>Our team consists of two main individuals with skills that complement each other.</p>
                        </Fade>
                    </div>
                    <div className="section-team__content">
                        <div className="section-team__left">
                            <Fade clear delay={200}>
                                <AvatarCard
                                    name='Shermaine'
                                    title='Business Development'
                                    image={shermaine}
                                />
                            </Fade>
                            <Fade clear delay={400}>
                                <AvatarCard
                                    name='Alicia'
                                    title='Web Development'
                                    image={alicia}
                                />
                            </Fade>
                        </div>
                        <div className="section-team__right">
                            <div className="section-team__img-box">
                                <img src={team} alt="team" className="section-team__img" />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default AboutUsPage;