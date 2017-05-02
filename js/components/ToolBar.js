import React from 'react';
import { Button } from 'react-bootstrap';


const ToolBar = ({ sortName, sortAge }) => {
  return (
    <div>
      <Button bsStyle="primary" onClick={() => sortName()}>a-z</Button>
      <Button bsStyle="primary" onClick={() => sortAge()}>10-100</Button>
    </div>
  )
}

export default ToolBar;