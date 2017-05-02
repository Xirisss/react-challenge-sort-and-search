import React from 'react';
import UserData from './UserData';
import { Table } from 'react-bootstrap';


const UserList = (props) => {
  const userData = props.users.map((user) => {
    return (
      <UserData
        selectedUser={props.selectedUser}
        user={user}
        key={user.id}
      />
    )
  })

  return (
    <div className="col-sm-8 col-md-9 col-lg-10">
      <Table striped bordered condensed hover className="container app">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          { userData }
        </tbody>
      </Table>
    </div>
  )
}

export default UserList;
