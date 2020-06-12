import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { LinkedIn, Instagram } from '@material-ui/icons';

class Footer extends Component {
    state = {}

    render() {
        return (
            <footer className='footer'>
                <div className='footer__top margin-bottom-small'>
                    <ul className='footer-list'>
                        <li className='footer-list__item'><NavLink to='/' exact activeClassName='footer-list__item--active'>Home</NavLink></li>
                        <li className='footer-list__item'><NavLink to='/about' exact activeClassName='footer-list__item--active'>About</NavLink></li>
                        <li className='footer-list__item'><NavLink to='/contact' activeClassName='footer-list__item--active'>Contact</NavLink></li>
                    </ul>
                    <div className='footer__content'>
                        <p className='footer__title margin-bottom-small'>Ready to start your creative journey?</p>
                        <Link to='/contact'>
                            <button className='btn btn-purple'>Let's go</button>
                        </Link>
                    </div>
                    <div className='footer__icons'>
                        <a className='footer__icon-box' href='https://www.linkedin.com/company/webly-creatives' target='_blank' rel='noopener noreferrer'>
                            <LinkedIn />
                        </a>
                        <a className='footer__icon-box' href='https://www.instagram.com/webly_creatives/' target='_blank' rel='noopener noreferrer'>
                            <Instagram />
                        </a>
                    </div>
                </div>
                <div className='footer__bottom'>
                    <p>Copyright 2020 Webly Creatives</p>
                </div>
            </footer>
        );
    }
}

export default Footer;