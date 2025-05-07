import axios from "axios";

const API_URL = "http://localhost:3000/users"

export  const registerUserApi = async (users) => {
  const response = await axios.post( API_URL, users );
     console.log("123", response.data);
  return response.data;
};
