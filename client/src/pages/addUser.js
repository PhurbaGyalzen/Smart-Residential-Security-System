import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addFile } from '../axiosData';

import './addUser.css';

// add blog component
const AddUser = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    const url = 'person';
    console.log(formData.values());
    try {
      const response = await addFile(formData, url);
      setTitle('');
      setDescription('');

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='addUserContainer'>
      <h1>Add User</h1>
      <div className='addUserForm'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='title'
            placeholder='Add User Id'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            name='description'
            rows='4'
            cols='50'
            placeholder='Add User Name'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input type='submit' value='Add Blog' />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
