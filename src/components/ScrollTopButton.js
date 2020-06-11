import React, { Component } from 'react';
import { KeyboardArrowUp } from '@material-ui/icons'

class ScrollTopButton extends Component {
    state = {
        scroll: this.props.scroll ?? false
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            scroll: nextProps.scroll,
        };
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <div className={`scroll-top btn-purple ${this.state.scroll ? '' : 'display-none'}`} onClick={this.scrollToTop}>
                <KeyboardArrowUp />
            </div>
        );
    }
}

export default ScrollTopButton;