import axios from 'axios';
import { FORGOT_ENDPOINT } from 'src/constant/constant';

export const resetPassword = async (email: string) => {
  const response = await axios.post(FORGOT_ENDPOINT, { email });
  return response;
};
