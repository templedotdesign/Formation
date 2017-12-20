import React, { Component } from 'react';

import ContactConfig from '../../../Config/ContactForm/ContactForm';
import Field from '../../../Components/Forms/Field/Field';
import Banner from '../../../Components/Banner/Banner';

import classes from './Contact.css';

class Contact extends Component {
  state = {
    formConfig: ContactConfig
  };

  handleChange = (event, id) => {
    let formState = {...this.state.formConfig};
    let formElement = {...formState[id]};
    if(formElement.touched === false) {
      formElement.touched = true;
    }
    
    formElement.value = event.target.value;
    formState[id] = formElement;
    this.setState({...this.state, formConfig: formState});
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    let formKeysArray = [];
    for(const key in this.state.formConfig) {
      formKeysArray.push(key);
    }
    return (
      <div>
        <Banner text='Contact Us!'/>
        <div className={classes.Form}>
          <div>
            {formKeysArray.map(key => {
              return (
                <Field
                  key={key}
                  label={this.state.formConfig[key].label}
                  elementType={this.state.formConfig[key].elementType} 
                  attributes={this.state.formConfig[key].attributes}
                  options={this.state.formConfig[key].options}
                  touched={this.state.formConfig[key].touched}
                  value={this.state.formConfig[key].value}
                  changed={(event) => this.handleChange(event, key)}
                  valid={this.state.formConfig[key].valid}
                  required={this.state.formConfig[key].validation.required}/>
              );
            })}
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Contact;