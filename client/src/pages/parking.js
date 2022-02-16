import React, { useState, useEffect } from 'react';
import { getAllFiles } from '../axiosData';

const Parking = () => {
  const [parking, setParking] = useState([]);

  const getSingleFileslist = async () => {
    let url = 'person';
    try {
      const fileslist = await getAllFiles(url);
      setParking(fileslist.data);
      console.log('smoke', parking);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleFileslist();
  }, []);

  return (
    <>
      <div className='totalParkingContainer'>
        <h3>Total Parked User</h3>
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
            {parking.map((data) => {
              const { _id, name } = data;
              return (
                <tr key={_id}>
                  <td>{_id}</td>
                  <td>{name}</td>
                  <td>
                    <i className='fa-solid fa-pen-to-square'></i>
                  </td>
                  <td>
                    <i className='fa-solid fa-trash-can'></i>
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

export default Parking;
