import React from 'react';

import './sales-overview.css';

import PropTypes from 'prop-types'

export const Percentage = ({ id, text, number }) => {


    return (
        <div>
            <div>
                <span className='ColorPercentage' id={`${id}-number`}>{number}%</span>
            </div>
            <div>
                <span className='TextPercentage' id={`${id}-text`}>{text}</span>
            </div>
        </div>
    )
}
Percentage.defaultProps = {
    id: 'percentage'
}

Percentage.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
}

export default Percentage;