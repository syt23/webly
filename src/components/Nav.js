import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

class Nav extends Component {
    state = {
        scroll: this.props.scroll ?? false
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            scroll: nextProps.scroll,
        };
    }

    render() {
        return (
            <div className={`nav ${this.state.scroll ? 'nav--scroll' : ''}`}>
                <h1 className='title flex-grow'><Link to='/'>Webly</Link></h1>
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