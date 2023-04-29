import axios from 'axios';
import { RESET_ENDPOINT } from 'src/constant/constant';

type FormValues = {
  password: string;
  passwordConfirmation: string;
  code: string | string[] | undefined;
};

export const updatePassword = async (data: FormValues) => {
  const response = await axios.post(RESET_ENDPOINT, data);
  return response;
};
