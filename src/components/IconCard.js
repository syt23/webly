import React from 'react';

const IconCard = ({ title, description, icon }) => {
    const Icon = icon

    return (
        <div className='icon-card'>
            <div className='icon-card__content'>
                <h3 className='title-tertiary'>{title}</h3>
                <p className='paragraph'>{description}</p>
            </div>
            <div className='icon-card__icon-box'>
                <Icon />
            </div>
        </div>
    );
}

export default IconCard;