import * as Constants from '../../Constants/ReservationForm/ReservationForm';

export default {
  firstName: {
    attributes: {
      type: 'text',
      placeholder: 'John'
    },
    elementType: 'input',
    label: 'First Name:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  middleName: {
    attributes: {
      type: 'text',
      placeholder: 'Quentin'
    },
    elementType: 'input',
    label: 'Middle Name:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  lastName: {
    attributes: {
      type: 'text',
      placeholder: 'Doe'
    },
    elementType: 'input',
    label: 'Last Name:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  suffix: {
    attributes: {},
    elementType: 'select',
    label: 'Suffix:',
    options: Constants.SUFFIXES,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  passportNum: {
    attributes: {
      type: 'text',
      placeholder: '#########'
    },
    elementType: 'input',
    label: 'Passport Number:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  passportState: {
    attributes: {
      type: 'text',
      placeholder: 'USA'
    },
    elementType: 'input',
    label: 'Passport Issuing Authority:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  passportExpiration: {
    attributes: {
      type: 'date'
    },
    elementType: 'input',
    label: 'Passport Expiration:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  dob: {
    attributes: {
      type: 'date'
    },
    elementType: 'input',
    label: 'Date Of Birth:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  gender: {
    attributes: {},
    elementType: 'select',
    label: 'Gender:',
    options: Constants.GENDER_TYPES,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  }
}