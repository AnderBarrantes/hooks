import React from 'react';

const UserTable = (props) => {
return (
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {props.users.length > 0 ? (
              props.users.map(user => (
                <tr key = {user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <div className="btn-group btn-group-sm">
                        <button 
                            className="btn btn-warning btn-sm"
                            onClick = {() => {props.editRow(user)}}
                        >
                            Editar
                        </button>
                        <button 
                            className="btn btn-danger btn-sm"
                            onClick = {() => {props.deleteUser(user.id)}}
                        >
                            Eliminar
                        </button>
                        </div>
                    </td>
                </tr>
              ))
            ):(
                <tr>
                    <td colSpan={3}>Sin Usuarios</td>
                </tr>
            )}
      </tbody>
    </table>
  );
}
export default UserTable