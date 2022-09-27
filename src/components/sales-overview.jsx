import React from 'react';
import { Paper, Tooltip, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import './sales-overview.css';
import '../account-overview.css';

import PropTypes from 'prop-types'
import Percentage from './percentage';

export const SalesOverview = ({ id, linesAttempted, linesSaved, successfulUploads, uploads }) => {

    return (
        <Paper className='SalesDashBoard'>
            <div>
                <FontAwesomeIcon className={'SalesIcon'} icon={faUpload} />
                <span className='SalesDetails' id={`${id}-sales`}>Sales</span>
                <Tooltip title='Some Info about sales'>
                    <IconButton>
                        <FontAwesomeIcon icon={faInfo} className={'Tooltip'} />
                    </IconButton>
                </Tooltip>
            </div>
            <span className='UploadsInfo' id={`${id}-upload-info`}> You had <b>{uploads} uploads</b> and <b>{linesAttempted}</b> lines added</span>
            <hr />
            <div className='Flex'>
                <Percentage
                    id={'upload-percentage'}
                    text={'UPLOAD SUCESS'}
                    number={successfulUploads}
                />
                <hr className='hr' />
                <Percentage
                    id={'lines-saved-percentage'}
                    text={'LINES SAVED'}
                    number={linesSaved}
                />
            </div>
        </Paper>
    )
}
SalesOverview.defaultProps = {
    id: 'sales-overview'
}

SalesOverview.propTypes = {
    id: PropTypes.string,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    uploads: PropTypes.number.isRequired,
}

export default SalesOverview;