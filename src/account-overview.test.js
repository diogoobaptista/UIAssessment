import { render } from '@testing-library/react';
import AccountOverview from './account-overview';

const accountOverviewStub = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com'
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  }
}

describe('Account Overview test', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('renders with correct values', () => {
    const element = (
      <AccountOverview data={accountOverviewStub} />
    );

    render(element, container);
    expect(container.querySelector('support-contact-header')).toBe('YOUR FEEFO SUPPORT CONTACT');
    expect(container.querySelector('support-contact-support')).toBe('Support');
    expect(container.querySelector('support-contact-email')).toBe(accountOverviewStub.supportContact.email);
    expect(container.querySelector('support-contact-name')).toBe(accountOverviewStub.supportContact.name);
    expect(container.querySelector('sales-overview-upload-info')).toBe('You had 8 uploads and 20 lines added');
    expect(container.querySelector('upload-percentage-number')).toBe('3%');
    expect(container.querySelector('lines-saved-percentage-number')).toBe('4%');
  });
});