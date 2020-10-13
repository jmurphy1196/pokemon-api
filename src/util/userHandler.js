import axios from "axios";

const userURI = process.env.SERVER_URI || `http://localhost:5000`;

export const loginUser = async (formData) => {
  try {
    const data = await axios.post(`${userURI}/login`, formData);
    return data;
  } catch (err) {
    console.log(err);
  }
};
