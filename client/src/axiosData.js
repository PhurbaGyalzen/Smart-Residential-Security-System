import axios from 'axios';

// For adding file
export const addFile = async (
  payload,
  url
  // blogProgressBarOptions
) => {
  try {
    const response = await axios.post(
      `http://192.168.11.71:8000/${url}`,
      payload
      // blogProgressBarOptions
    );
    console.log(response.data);
    const result = {
      status: response.status,
      data: response.data,
    };
    return result;
  } catch (error) {
    return {
      status: 400,
    };
  }
};

// For getting all blogs limit-6
export const getAllFiles = async (url) => {
  try {
    const response = await axios.get(`http://192.168.11.71:8000/${url}`);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// For deleting a file

export const deleteFile = async (url) => {
  try {
    const response = await axios.delete(`http://192.168.11.71:8000/${url}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
