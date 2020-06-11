import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class HamburgerNavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
    }

    handleHover() {
        this.setState({ hover: !this.state.hover });
    }

    render() {
        const styles = {
            container: {
                opacity: 0,
                animation: '1s appear forwards',
                animationDelay: this.props.delay,
            },
            menuItem: {
                padding: '1rem 0',
                margin: '0 5%',
                cursor: 'pointer',
                color: this.state.hover ? 'gray' : '#fafafa',
                transition: 'color 0.2s ease-in-out',
                animation: '0.5s slideIn forwards',
                animationDelay: this.props.delay,
                textDecoration: 'none',
                display: 'inline-block'
            },
            line: {
                width: '90%',
                height: '1px',
                background: 'gray',
                margin: '0 auto',
                animation: '0.5s shrink forwards',
                animationDelay: this.props.delay,
            }
        }
        return (
            <div style={styles.container}>
                <NavLink
                    style={styles.menuItem}
                    onMouseEnter={() => { this.handleHover(); }}
                    onMouseLeave={() => { this.handleHover(); }}
                    onClick={this.props.onClick}
                    to={this.props.link}
                    activeClassName='nav-list__item--active'
                    exact
                >
                    {this.props.children}
                </NavLink>
                <div style={styles.line} />
            </div>
        )
    }
}

export default HamburgerNavItem;