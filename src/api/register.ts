import axios from 'axios';
import { API } from 'src/constant/constant';

type UserProps = {
  username: string;
  email: string;
  password: string;
};

//Register a new user with strapi

export const registerUser = async (user: UserProps): Promise<void> => {
  try {
    await axios.post(`${API}/auth/local/register`, user);
  } catch (error) {
    console.log(error);
  }
};
