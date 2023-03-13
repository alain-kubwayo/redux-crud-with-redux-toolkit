import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';

function App() {
  const userList = useSelector(state => state.users.value); // users come from index.js (store) and value property comes from userSlice
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="App">
      <div className="addUser">
        <input 
          type="text"
          placeholder="Name..." 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Username..." 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button onClick={() => dispatch(addUser({id: userList[userList.length - 1].id + 1, name, username}))}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map(user => (
          <div key={user.id} style={{ borderBottom: '4px dashed #f45', margin: '10px auto', width: '400px' }}>
            <h1>Name: {user.name}</h1>
            <p>Username: {user.username}</p>  
            <input 
              type="text" 
              placeholder="Update username..."
              onChange={e => setNewUsername(e.target.value)}
            />
            <button onClick={() => dispatch(updateUsername({id: user.id, username: newUsername}))}>Update Username</button>
            <button onClick={() => dispatch(deleteUser({id: user.id}))}>Delete User</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
