import React from 'react';
import { Button } from 'react-bootstrap';


const ToolBar = ({ sortName, sortAge }) => {
  return (
    <div>
      <Button className="sortBtn" bsStyle="primary" onClick={() => sortName()}>Sort by Name</Button>
      <Button className="sortBtn" bsStyle="primary" onClick={() => sortAge()}>sort by Age</Button>
    </div>
  )
}

export default ToolBar;