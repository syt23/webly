import React, { Component } from 'react';

class HamburgerNavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open ? this.props.open : false,
            color: this.props.color ? this.props.color : 'black',
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            open: nextProps.open,
        };
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const styles = {
            container: {
                position: 'fixed',
                height: '32px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                cursor: 'pointer',
                padding: '1rem',
                background: this.state.open ? 'black' : 'white',
                zIndex: '102',
            },
            line: {
                height: '2px',
                width: '20px',
                background: this.state.color,
                transition: 'all 0.2s ease',
            },
            lineTop: {
                transform: this.state.open ? 'rotate(45deg)' : 'none',
                transformOrigin: 'top left',
                marginBottom: '5px',
                background: this.state.open ? 'white' : 'black',
                zIndex: '101',
            },
            lineMiddle: {
                opacity: this.state.open ? 0 : 1,
                transform: this.state.open ? 'translateX(-16px)' : 'none',
            },
            lineBottom: {
                transform: this.state.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
                transformOrigin: 'top left',
                marginTop: '5px',
                background: this.state.open ? 'white' : 'black',
                zIndex: '101',
            },
        }
        return (
            <div style={styles.container}
                onClick={this.props.onClick ? this.props.onClick :
                    () => { this.handleClick(); }}>
                <div style={{ ...styles.line, ...styles.lineTop }} />
                <div style={{ ...styles.line, ...styles.lineMiddle }} />
                <div style={{ ...styles.line, ...styles.lineBottom }} />
            </div>
        )
    }
}

export default HamburgerNavButton;