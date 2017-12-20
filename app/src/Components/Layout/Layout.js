import React from 'react';

import Toolbar from '../../Components/Layout/Navigation/Toolbar/Toolbar';

const layout = (props) => {
  return(
    <div>
      <Toolbar/>
      {props.children}
    </div>
  );
};

export default layout;