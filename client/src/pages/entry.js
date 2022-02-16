import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAllFiles } from '../axiosData';

const Entry = () => {
  const [entry, setEntry] = React.useState([]);

  const getSingleFileslist = async () => {
    let url = 'entry';
    try {
      const fileslist = await getAllFiles(url);
      setEntry(fileslist.data);
      console.log('entry', entry);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleFileslist();
  }, []);

  return (
    <>
      <div className='totalEntryContainer'>
        <h3>Total Entry</h3>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {entry.map((data) => {
              const { _id, date, person } = data;
              return (
                <tr key={_id}>
                  <td>{person._id}</td>
                  <td>{person.name}</td>
                  <td>{date}</td>
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

export default Entry;
