import React from 'react';


const UserData = ({ user, selectedUser }) => {
  if (!user) {
    return (null)
  }
  return (
    <tr onClick={() => selectedUser(user)}>
      <td><img className="rc-img" src={`./images/${user.image}.svg`} /></td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.phone}</td>
    </tr>
  )
}

export default UserData;
