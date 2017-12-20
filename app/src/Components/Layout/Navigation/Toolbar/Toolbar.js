import React from 'react';

import LinkGroup from '../LinkGroup/LinkGroup';

import classes from './Toolbar.css';

const toolbar = (props) => {
  const links = [
    {to: '/', name: 'Home'},
    {to: '/reservations', name: 'Reservations'},
    {to: '/payments', name: 'Payments'},
    {to: '/agents', name: 'Agents'},
    {to: '/disney', name: 'Disney'},
    {to: '/grouptravel', name: 'Group Travel'},
    {to: '/resources', name: 'Resources'},
    {to: '/blog', name: 'Blog'},
    {to: '/contact', name: 'Contact Us'}
  ];
  return(
    <div className={classes.Toolbar}>
      <LinkGroup links={links} horizontal/>
    </div>
  );
};

export default toolbar;