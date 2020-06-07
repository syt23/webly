import React from 'react';

const TallCard = ({ title, description, icon }) => {
    const Icon = icon;

    return (
        <div className='tall-card'>
            <div className='tall-card__icon-box'>
                <Icon />
            </div>
            <div className='tall-card__content'>
                <h3 className='title-secondary'>{title}</h3>
                <p className='paragraph'>{description}</p>
            </div>
        </div>
    );
}

export default TallCard;