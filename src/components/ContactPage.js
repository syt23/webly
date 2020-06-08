import React, { Component } from 'react';
import { LinkedIn, Instagram } from '@material-ui/icons';
import Nav from './Nav'
import Footer from './Footer'
import contact from '../assets/ContactPage/contact.png'

class ContactPage extends Component {
    state = {}

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className='banner bg-white contact'>
                        <div className='contact__left'>
                            <div className='margin-bottom-medium'>
                                <h1 className='title-secondary margin-bottom-small'>Contact Us</h1>
                                <p className='paragraph'>Book a free consultation with us now!</p>
                            </div>
                            <form className='form'>
                                <input className='form__input' type='text' name='name' placeholder='Your name' />
                                <input className='form__input' type='number' name='number' placeholder='Your contact number' />
                                <input className='form__input' type='text' name='email' placeholder='Your email' />
                                <textarea className='form__input' cols='20' rows='10' placeholder='Your message here' />
                                <input type='submit' className='btn btn-purple' value='SUBMIT' />
                            </form>
                        </div>
                        <div className="contact__right">
                            <div className="contact__img-box">
                                <img src={contact} alt="contact us" className="contact__img" />
                            </div>
                            <div className="contact__social">
                                <p class='paragraph'><b>Do also check out our social media!</b></p>
                                <div className='contact__icons'>
                                    <a className='contact__icon-box' href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                                        <LinkedIn />
                                    </a>
                                    <a className='contact__icon-box' href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                                        <Instagram />
                                    </a>
                                </div>
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