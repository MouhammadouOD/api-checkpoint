import React from "react";

function UserList({users}) {

  var display = users.map(user => {
    return (
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    );
  });
  return (
    <table className="table table-dark table-hover mt-4 ">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">UserName</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>{display}</tbody>
    </table>
  );
}

export default UserList;
