import React, { useState, useEffect } from 'react';
import { getAllFiles } from '../axiosData';

const Fence = () => {
  const [fence, setFence] = useState([]);

  const getSingleFileslist = async () => {
    let url = 'fence';
    try {
      const fileslist = await getAllFiles(url);
      setFence(fileslist.data);
      console.log('fence', fence);
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
        <h3>Fence data</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {fence.map((data) => {
              const { _id, date } = data;
              return (
                <tr key={_id}>
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

export default Fence;
