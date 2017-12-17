import React from 'react';

import Validator from '../Validator/Validator';

import classes from './Field.css';

const field = (props) => {
  let label = null;
  if(props.required) {
    label = (
      <label style={{fontWeight: 'bold'}}>{props.label}</label>
    );
  } else {
    label = (
      <label>{props.label}</label>
    );  
  }

  let input = null;
  if(props.elementType) {
    switch(props.elementType) {
      case 'input':
        input = (<input {...props.attributes} value={props.value} onChange={props.changed}/>);
        break;
      case 'textarea':
        input = (<textarea {...props.attributes} value={props.value} onChange={props.changed}/>);
        break;
      case 'select':
        input = (
          <select {...props.attributes} value={props.value} onChange={props.changed}>
          {props.options.map(option => (
            <option key={option.value} value={option.value}>{option.name}</option>
          ))}
          </select>
        );
        break;
      default:
        console.error("Components/Forms/Field::Unrecognized Element Type") 
        break;
    }
  } else {
    console.error("Components/Forms/Field::Element Type Not Set")
  }
  return(
    <div className={classes.Field}>
      {label}
      <div className={classes.Row}>
        {input}
        <Validator valid={props.valid} touched={props.touched}/>
      </div>
    </div>
  );
};

export default field;