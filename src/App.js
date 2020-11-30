import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import UserTable from './componentes/UserTable'
import AddUserForm from './componentes/AddUserForm';
import EditUserForm from './componentes/EditUserForm';

function App() {
  
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
  
  //state
  const [users, setUsers] = useState(usersData);

  //agregar usuario
  const AddUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,//copiabamos los que ya tendriamos
      user
    ])
  }

  //eliminar usuario
  const deleteUser = (id) => {
    //console.log(id);
    const arrayFiltrado = users.filter((user) => user.id !== id);
    setUsers(arrayFiltrado);
  }

  //editar usuario
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  };
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light mb-3">
        <h1>CRUD con Hooks</h1>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col mb-2">
            {
              editing ? (
                <div>
                  <h2>Editar Usuario</h2>
                  <EditUserForm currentUser={currentUser} updateUser={updateUser}></EditUserForm>
                </div>
              ):(
                <div>
                  <h2>Agregar Usuario</h2>
                  <AddUserForm AddUser={AddUser}></AddUserForm>
                </div>
              )
            }
          </div>
          <div className="col">
            <h2>Listar Usuarios</h2>
            <UserTable 
              users={users} 
              deleteUser={deleteUser}
              editRow={editRow}
              >
            </UserTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App