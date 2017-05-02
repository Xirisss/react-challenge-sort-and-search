import React from 'react';
import { Button } from 'react-bootstrap';


const ToolBar = ({ sortName, sortAge }) => {
  return (
    <div>
      <Button bsStyle="primary" onClick={() => sortName()}>Sort by Name</Button>
      <Button bsStyle="primary" onClick={() => sortAge()}>sort by Age</Button>
    </div>
  )
}

export default ToolBar;