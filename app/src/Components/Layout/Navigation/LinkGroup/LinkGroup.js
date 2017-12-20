import React from 'react';

import Link from '../Link/Link';

import classes from './LinkGroup.css';

const linkGroup = (props) => {
  let navClass = null;
  if(props.horizontal) {
    navClass = classes.Horizontal;
  } else {
    navClass = classes.Vertical;
  }
  const links = props.links.map(link => {
    return (
      <Link key={link.to} to={link.to} name={link.name}/>
    );
  });
  return (
    <nav className={navClass}>
      {links}
    </nav>
  );
};

export default linkGroup;