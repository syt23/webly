import React, { Component } from 'react';
import { Close } from '@material-ui/icons'

class Modal extends Component {
    render() {
        return (
            <div className='modal'>
                <div className='modal__body'>
                    <Close className='modal__close' onClick={this.props.handleModalClose} />
                    <div className='modal__text'>
                        <p className='title-tertiary margin-bottom-small'>{this.props.title}</p>
                        <p>{this.props.content}</p>
                    </div>
                    <button className='btn btn-purple' onClick={this.props.handleModalClose}>OK</button>
                </div>
            </div>
        );
    }
}

export default Modal;