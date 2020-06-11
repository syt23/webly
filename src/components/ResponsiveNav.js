import React, { Component } from 'react';
import Nav from './Nav'
import HamburgerNav from './HamburgerNav'
import HamburgerNavButton from './HamburgerNavButton'
import HamburgerNavItem from './HamburgerNavItem'

class ResponsiveNav extends Component {
    state = {
        menuOpen: false,
        scroll: this.props.scroll ?? false
    }

    handleMenuClick = () => {
        this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));

    }

    handleLinkClick() {
        this.setState({ menuOpen: false });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            scroll: nextProps.scroll,
        };
    }

    render() {
        const menu = [
            {
                display: 'Home',
                link: '/'
            },
            {
                display: 'About',
                link: '/about'
            },
            {
                display: 'Contact',
                link: '/contact'
            }
        ]
        const menuItems = menu.map((item, index) => {
            return (
                <HamburgerNavItem
                    key={index}
                    delay={`${index * 0.1}s`}
                    onClick={() => { this.handleLinkClick(); }}
                    link={item.link}>
                    {item.display}
                </HamburgerNavItem>
            )
        });

        return (
            <React.Fragment>
                <div className='display-screen'>
                    <Nav scroll={this.state.scroll} />
                </div>
                <div className='display-mobile'>
                    <HamburgerNavButton
                        open={this.state.menuOpen}
                        onClick={this.handleMenuClick}
                    />
                    <HamburgerNav className='display-mobile'
                        open={this.state.menuOpen}
                    />
                    <HamburgerNav open={this.state.menuOpen}>
                        {menuItems}
                    </HamburgerNav>
                </div>
            </React.Fragment>
        );
    }
}

export default ResponsiveNav;