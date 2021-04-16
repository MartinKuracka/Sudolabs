import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState();

  async function fetchData() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const results = await response.json();
    setUsers(results.results.filter(users => users.gender === 'female'));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (users) {
    return (
      <>
      <div className="App">
        <div className='buttonWrap'>
          <button onClick={fetchData}>Fetch Again</button>
        </div>
        {users.map(user => (
          <div className='content_container'>
            <img src={user.picture.thumbnail} alt={user.name.last}/>
            <div className='text'>
              <p className='name'>{user.name.title + user.name.first + user.name.last }</p>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>
  }
}

export default App;
