import React, { Component } from 'react';

class HamburgerNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open ? this.props.open : false,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            open: nextProps.open,
        };
    }

    render() {
        const styles = {
            container: {
                position: 'fixed',
                top: 0,
                left: 0,
                height: this.state.open ? '100%' : 0,
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                background: 'black',
                opacity: 0.95,
                color: '#fafafa',
                transition: 'height 0.3s ease',
                zIndex: 2,
            },
            menuList: {
                paddingTop: '3rem',
            }
        }
        return (
            <div style={styles.container}>
                {
                    this.state.open ?
                        <div style={styles.menuList}>
                            {this.props.children}
                        </div> : null
                }
            </div>
        )
    }
}

export default HamburgerNav;