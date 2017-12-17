export default {
  requests: {
    attributes: {
      cols: '40',
      rows: '10'
    },
    elementType: 'textarea',
    label: 'Special Requests:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  questions: {
    attributes: {
      cols: '40',
      rows: '10'
    },
    elementType: 'textarea',
    label: 'Other Questions / Comments:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  signature: {
    attributes: {
      type: 'text',
      placeholder: 'John Q. Doe'
    },
    elementType: 'input',
    label: 'Electronic Signature:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
}