import axios from "axios";
import { act } from "react";

const API_URL = "http://localhost:3000/users";

export const registerUserApi = async ( users ) =>
{
  const response = await axios.post( API_URL, users );
  console.log( "API", response.data );
  return response.data;
};

export const loginUserAPI = async ( { name, password } ) =>
{
  return await axios.get( API_URL, {
    params: {
      name,
      password
    }
  } )
}


export const getProductsAPI = async () =>
{
  return await axios.get( "http://localhost:3000/products" );
}
