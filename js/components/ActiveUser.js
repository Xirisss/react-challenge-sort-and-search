import React from 'react';
import { Table } from 'react-bootstrap';


const ActiveUser = ({ user }) => {
  if (!user) {
    return(<h1>No Users</h1>)
  }
  return (
    <div className="col-sm-4 col-md-3 col-lg-2">
      <img className="rc-img" src={`./images/${user.image}.svg`} />
      <h1>{user.name}</h1>
      <Table striped bordered condensed>
        <tbody>
          <tr>
            <td>User age:</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>User phone:</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>User phrase:</td>
            <td>{user.phrase}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default ActiveUser;
