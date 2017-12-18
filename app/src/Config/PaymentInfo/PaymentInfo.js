import * as Constants from '../../Constants/ReservationForm/ReservationForm';

export default {
  ccNumber: {
    attributes: {
      type: 'text',
      placeholder: '1234-1234-1234-1234'
    },
    elementType: 'input',
    label: 'Credit Card Number:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  ccExpirationMonth: {
    attributes: {
      type: 'text',
      placeholder: 'MM'
    },
    elementType: 'input',
    label: 'Expiration Month:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  ccExpirationYear: {
    attributes: {
      type: 'text',
      placeholder: 'YY'
    },
    elementType: 'input',
    label: 'Expiration Year:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  ccv: {
    attributes: {
      type: 'text',
      placeholder: '123'
    },
    elementType: 'input',
    label: 'CCV:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  ccName: {
    attributes: {
      type: 'text',
      placeholder: 'John Q. Doe'
    },
    elementType: 'input',
    label: 'Name On Card:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  billingAddress: {
    attributes: {},
    elementType: 'select',
    label: 'Billing Address Same As Contact Address:',
    options: Constants.YES_NO,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  ccAmount: {
    attributes: {},
    elementType: 'select',
    label: 'Pay In Full Or Deposit:',
    options: Constants.PAYMENT_AMOUNTS,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
}