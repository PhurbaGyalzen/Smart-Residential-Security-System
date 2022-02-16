import React, { useState } from 'react';
import { addFile } from '../axiosData';

import './addUser.css';

// add blog component
const AddUser = () => {
  const [id, setId] = useState(1);
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      id: parseInt(id),
      name: name,
    };
    const url = 'person';
    try {
      const response = await addFile(payload, url);
      console.log(response);
      if (response.status === 201) {
        window.alert(
          `${response.data.name} added successfully with id ${response.data._id}`
        );
      } else if (response.status === 400) {
        window.alert(`A user with this id already exists`);
      }
      setId('');
      setName('');

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='addUserContainer'>
      <h1>Add New User</h1>
      <div className='addUserForm'>
        <form onSubmit={handleSubmit}>
          <input
            type='number'
            name='id'
            placeholder='Add User Id'
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            min='1'
          />
          <textarea
            name='name'
            rows='4'
            cols='50'
            placeholder='Add User Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input type='submit' value='Add Blog' />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
