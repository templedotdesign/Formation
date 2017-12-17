import * as Constants from '../../Constants/ReservationForm/ReservationForm';

export default {
  departureDate: {
    attributes: {
      type: 'date'
    },
    elementType: 'input',
    label: 'Departure Date:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  returnDate: {
    attributes: {
      type: 'date'
    },
    elementType: 'input',
    label: 'Return Date:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  beddingType: {
    attributes: {},
    elementType: 'select',
    label: 'Preferred Bedding Type:',
    options: Constants.BEDDING_TYPES,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  departureAirport: {
    attributes: {
      type: 'text',
      placeholder: 'Columbus'
    },
    elementType: 'input',
    label: 'Departure Airport:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  destinationAirport: {
    attributes: {
      type: 'text',
      placeholder: 'Jamaica'
    },
    elementType: 'input',
    label: 'Destination Airport:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  vacationType: {
    attributes: {},
    elementType: 'select',
    label: 'Vacation Type:',
    options: Constants.VACATION_TYPES,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  airfare: {
    attributes: {},
    elementType: 'select',
    label: 'Do You Need Airfare?',
    options: Constants.YES_NO_AIRFARE,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  military: {
    attributes: {},
    elementType: 'select',
    label: 'Active Military / Veteran?',
    options: Constants.YES_NO,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  insurance: {
    attributes: {},
    elementType: 'select',
    label: 'Do You Want Travel Insurance?',
    options: Constants.YES_NO_INSURANCE,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  }
}