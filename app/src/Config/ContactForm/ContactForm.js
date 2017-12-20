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
      required: false
    },
    valid: true
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
      required: false
    },
    valid: true
  },
  email: {
    attributes: {
      type: 'email',
      placeholder: 'john@doe.com'
    },
    elementType: 'input',
    label: 'Your Email:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: true
  },
  comments: {
    attributes: {
      cols: '50',
      rows: '10'
    },
    elementType: 'textarea',
    label: 'How May We Help You?',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: true
  },
}