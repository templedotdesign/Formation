import React from 'react';

import { NavLink } from 'react-router-dom';

const link = (props) => {
  return (
    <NavLink to={props.to}>{props.name}</NavLink>
  );
};

export default link;