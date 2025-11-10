import React from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}


const UsersPage = async() => { //async signals that this function is going to take time
    //wait to fetch data from the api and store in res variable
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'}); //revalidate every 10 seconds
    //takes the res, converst to json, and stores in users variable
  const users: User[] =  await res.json();

  return (
    <div>
      <h1 >Users</h1>
      <table className='table table-bordered w-full'>
        <thead><tr>
          <th>Name</th>
          <th>Email</th>
        </tr></thead>
        <tbody>
      {users.map(user => <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>)}
      </tbody>
      </table>
    </div>
  );
}
export default UsersPage;