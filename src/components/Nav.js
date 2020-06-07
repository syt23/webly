import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    state = {}

    render() {
        return (
            <div className='nav'>
                <h1 className='title flex-grow'>Webly</h1>
                <ul className='nav-list'>
                    <li className='nav-list__item'><NavLink title='Home' to='/' exact activeClassName='nav-list__item--active'>Home</NavLink></li>
                    <li className='nav-list__item'><NavLink title='About' to='/about' exact activeClassName='nav-list__item--active'>About</NavLink></li>
                    <li className='nav-list__item'><NavLink title='Contact' to='/contact' activeClassName='nav-list__item--active'>Contact</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Nav;