import { API } from "@ui/constant";
import axios from "axios";

type UserProps = {
  username: string
  email:string
  password:string
}

//Register a new user with strapi

export const registerUser = async (user:UserProps): Promise<void> => {
  try{
    await axios.post(`${API}/auth/local/register`, user);
  }catch (error) {
    console.log(error)
  }
}