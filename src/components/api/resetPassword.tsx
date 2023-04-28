import { RESET_ENDPOINT } from '@ui/constant';
import axios from 'axios';

type FormValues = {
  password: string;
  passwordConfirmation: string;
  code: string | string[] | undefined;
};

export const updatePassword = async (data: FormValues) => {
  const response = await axios.post(RESET_ENDPOINT, data);
  return response;
};
