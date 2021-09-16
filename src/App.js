import axios from 'axios';
import { useState , useEffect } from 'react';
import './App.css';
import UserList from './Components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
      setUsers(response.data);
      console.log(response.data)
      console.log(users)
    })
    .catch(err => setError(err))
  }, [])
//<UserList users={users} />

  return (
    <div className="App">
      <h1>List Of Users</h1>
      <hr/><br/>

      <UserList users={users} />
    </div>
  );
}

export default App;
