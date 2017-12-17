import * as Constants from '../../Constants/ReservationForm/ReservationForm';

export default {
  paymentType: {
    attributes: {},
    elementType: 'select',
    label: 'Payment Type:',
    options: Constants.PAYMENT_TYPES,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
}