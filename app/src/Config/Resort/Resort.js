import * as Constants from '../../Constants/ReservationForm/ReservationForm';

export default {
  resort: {
    attributes: {
      type: 'text',
      placeholder: 'Sandals ochi'
    },
    elementType: 'input',
    label: 'Perferred Resort:',
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
    label: 'Room Type:',
    options: Constants.ROOM_TYPES,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  }
}