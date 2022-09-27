import React from 'react';
import SupportContact from './components/support-contact'

import './account-overview.css';
import SalesOverview from './components/sales-overview';

export const AccountOverview = ({ data }) => {
  console.log(data);

  return (
    <div className='DashBoard'>
      <div className='Flex'>
        <span className='AccountOverview'>Account Overview</span>
        <SupportContact
          email={data.supportContact.email}
          name={data.supportContact.name}
        />
      </div>
      <SalesOverview
        uploads={data.salesOverview.uploads}
        successfulUploads={data.salesOverview.successfulUploads}
        linesSaved={data.salesOverview.linesSaved}
        linesAttempted={data.salesOverview.linesAttempted}
      />

    </div>
  )
}


export default AccountOverview;