import axios from "axios";
import { SIGNUP_URL } from "../urls";

export const postSignUp = async (username, password) => {
  try {
    return axios.post(SIGNUP_URL, {
      username: username,
      password: password,
    });
  } catch (error) {
    throw error;
  }
};
