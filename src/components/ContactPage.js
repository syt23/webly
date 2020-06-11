import React, { Component } from 'react'
import { LinkedIn, Instagram } from '@material-ui/icons'
import { Fade, Bounce } from 'react-reveal'
import axios from 'axios'
import ResponsiveNav from './ResponsiveNav'
import Footer from './Footer'
import contact from '../assets/ContactPage/contact.png'

class ContactPage extends Component {
    state = {
        name: '',
        number: '',
        email: '',
        message: '',
        emailError: false,
        numberError: false,
        success: false,
        failure: false,
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

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.number.match(/^[0-9]{8,15}$/)) {
            this.setState({ numberError: true });
        }

        if (!this.state.email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            this.setState({ emailError: true });
        }
        if (this.state.emailError || this.state.numberError) {
            return;
        }

        axios({
            method: 'post',
            url: '/mail',
            timeout: 3000,
            data: {
                ...this.state
            }
        })
            .then(response => {
                // console.log("response: " + response)
                this.setState({
                    success: true,
                    failure: false,
                    name: '',
                    number: '',
                    email: '',
                    message: '',
                });
            })
            .catch(error => {
                console.error('timeout exceeded')
                this.setState({
                    success: true,
                    failure: false,
                    name: '',
                    number: '',
                    email: '',
                    message: '',
                });
            })
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    onNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    onNumberChange = (e) => {
        this.setState({ number: e.target.value });
    }

    onMessageChange = (e) => {
        this.setState({ message: e.target.value });
    }

    render() {
        return (
            <div>
                <ResponsiveNav scroll={this.state.scroll} />
                {
                    this.state.error && (
                        <div className='modal'>
                            <p>Unknown Error</p>
                            <p>Please try again later.</p>
                        </div>
                    )
                }

                {
                    (this.state.emailError || this.state.numberError) && (
                        <div className='modal'>
                            <p>Invalid Field(s): {this.state.emailError ? 'Email' : ''} {this.state.numberError ? 'Number' : ''}</p>
                            <p>Please enter a valid email and/or phone number.</p>
                        </div>
                    )
                }
                <div className="container">
                    <div className='banner bg-white contact'>
                        <div className='contact__left'>
                            <div className='margin-bottom-medium'>
                                <Fade top>
                                    <h1 className='title-secondary margin-bottom-small'>Contact Us</h1>
                                </Fade>
                                <Fade top daly={200}>
                                    <p className='paragraph'>Book a free consultation with us now!</p>
                                </Fade>
                            </div>
                            <Fade clear delay={200}>
                                <form className='form' onSubmit={this.handleSubmit}>
                                    <input className='form__input' type='text' value={this.state.name} onChange={this.onNameChange} name='name' placeholder='Your name' />
                                    <input className='form__input' type='number' value={this.state.number} onChange={this.onNumberChange} name='number' placeholder='Your contact number' />
                                    <input className='form__input' type='text' value={this.state.email} onChange={this.onEmailChange} name='email' placeholder='Your email' />
                                    <textarea className='form__input' value={this.state.message} onChange={this.onMessageChange} cols='20' rows='10' placeholder='Your message here' />
                                    <input type='submit' className='btn btn-purple align-self' value='SUBMIT' />
                                </form>
                            </Fade>
                        </div>
                        <div className="contact__right">
                            <div className="contact__img-box">
                                <img src={contact} alt="contact us" className="contact__img" />
                            </div>
                            <div className="contact__social">
                                <p className='paragraph'><b>Do also check out our social media!</b></p>
                                <Bounce bottom>
                                    <div className='contact__icons'>
                                        <a className='contact__icon-box' href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                                            <LinkedIn />
                                        </a>

                                        <a className='contact__icon-box' href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                                            <Instagram />
                                        </a>
                                    </div>
                                </Bounce>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ContactPage;