import * as Constants from '../../Constants/ReservationForm/ReservationForm';

export default {
  primaryAgent: {
    attributes: {},
    elementType: 'select',
    label: 'Who is your travel agent?',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: true
  },
  numOfPassengers: {
    attributes: {},
    elementType: 'select',
    label: 'Total Number of Passengers:',
    options: Constants.PASSENGER_COUNT,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: true
  },
  travelType: {
    attributes: {},
    elementType: 'select',
    label: 'International Or Domestic Travel?',
    options: Constants.TRAVEL_TYPES,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: true
  },
}