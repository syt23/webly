import React, { Component } from 'react';
import Nav from './Nav'

class NotFoundPage extends Component {
    state = {}

    render() {
        return (
            <div className='container'>
                <Nav />
                Not found
            </div>
        );
    }
}

export default NotFoundPage;