import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAllFiles } from '../axiosData';

const Smoke = () => {
  const [smoke, setSmoke] = React.useState([]);

  const getSingleFileslist = async () => {
    let url = 'smoke';
    try {
      const fileslist = await getAllFiles(url);
      setSmoke(fileslist.data);
      console.log('smoke', smoke);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleFileslist();
  }, []);

  return (
    <>
      <div className='totalSmokeContainer'>
        <h3>Total Smoke Detected</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Threshold</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {smoke.map((data) => {
              const { _id, date, threshold } = data;
              return (
                <tr key={_id}>
                  <td>{date}</td>
                  <td>{threshold}</td>
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

export default Smoke;
