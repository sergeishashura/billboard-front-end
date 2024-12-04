import axios from "axios";
import { LOGIN_URL } from "../urls";

export const postLogin = async (username, password) => {
  try {
    return axios.post(LOGIN_URL, {
      username: username,
      password: password,
    });
  } catch (error) {
    throw error;
  }
};
