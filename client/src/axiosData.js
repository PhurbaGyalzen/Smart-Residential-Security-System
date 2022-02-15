import axios from 'axios';

// For adding file
export const addFile = async (
  formData,
  url
  // blogProgressBarOptions
) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/${url}`,
      formData
      // blogProgressBarOptions
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// For getting all blogs limit-6
export const getAllFiles = async () => {
  try {
    const response = await axios.get('http://localhost:5000/blog');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
