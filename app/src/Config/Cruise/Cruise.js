import * as Constants from '../../Constants/ReservationForm/ReservationForm';

export default {
  resort: {
    attributes: {
      type: 'text',
      placeholder: 'Princess Alaska'
    },
    elementType: 'input',
    label: 'Preferred Cruise:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  roomType: {
    attributes: {},
    elementType: 'select',
    label: 'Cabin Type:',
    options: Constants.CABIN_TYPES,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  }
}