import React, { useState, useEffect } from 'react';
import { getAllFiles, deleteFile } from '../axiosData';

const User = () => {
  const [user, setUser] = useState([]);

  const getSingleFileslist = async () => {
    let url = 'person';
    try {
      const fileslist = await getAllFiles(url);
      setUser(fileslist.data);
      console.log('user', user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleFileslist();
  }, []);

  // const handleDelete = async (id) => {
  //   let url = 'person' + '/' + id;
  //   console.log(url);
  //   const response = await deleteFile(url);
  //   if (response.status === 200) {
  //     window.alert('User Deleted');
  //   }
  // };

  return (
    <>
      <div className='totalUserContainer'>
        <h3>Total User</h3>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => {
              const { _id, name } = user;
              return (
                <tr key={_id}>
                  <td>{_id}</td>
                  <td>{name}</td>
                  <td>
                    <i className='fa-solid fa-pen-to-square'></i>
                  </td>
                  <td>
                    <i
                      className='fa-solid fa-trash-can'
                      // onClick={() => handleDelete(_id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
