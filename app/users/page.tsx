import React from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}


const UsersPage = async() => { //async signals that this function is going to take time
    //wait to fetch data from the api and store in res variable
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //takes the res, converst to json, and stores in users variable
  const users: User[] =  await res.json();

  return (
    <div>
      <h1 >Users</h1>
      <ul>
      {users.map(user => <li key={user.id}>NAME: {user.name} EMAIL: {user.email}</li>)}
      </ul>
    </div>
  );
}
export default UsersPage;