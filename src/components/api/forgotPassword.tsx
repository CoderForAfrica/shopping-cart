import { FORGOT_ENDPOINT } from "@ui/constant"
import axios from "axios";


export const resetPassword = async (email: string)  => {
  const response = await axios.post (FORGOT_ENDPOINT, {email});
  return response
}