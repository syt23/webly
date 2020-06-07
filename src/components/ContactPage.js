import React, { Component } from 'react';
import Nav from './Nav'
import Footer from './Footer'

class ContactPage extends Component {
    state = {}

    render() {
        return (
            <div>
                <Nav />
                Contact
                <Footer />
            </div>
        );
    }
}

export default ContactPage;