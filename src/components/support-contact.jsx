import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './support-contact.css';
import '../account-overview.css';

import PropTypes from 'prop-types'

export const SupportContact = ({ id, email, name }) => {

    const HEADER_TEXT = 'YOUR FEEFO SUPPORT CONTACT'
    const SUPPORT = 'Support'

    return (
        <div className='DashBoard'>
            <div className='SupportHeader' id={`${id}-header`}>{HEADER_TEXT}</div>
            <div className='Flex'>
                <div className='SupportIcon'>S</div>
                <div>
                    <div className='SupportSubHeader' id={`${id}-support`}>{SUPPORT}</div>
                    <div>
                        <FontAwesomeIcon className={'Envelope'} icon={faEnvelope} />
                        <span className='ContactDetails' id={`${id}-email`}>{email}</span>
                        <span className='ContactDetails' id={`${id}-name`}>{name}</span>
                    </div>

                </div>
            </div>

        </div>
    )
}
SupportContact.defaultProps = {
    id: 'support-contact'
}

SupportContact.propTypes = {
    id: PropTypes.string,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default SupportContact;