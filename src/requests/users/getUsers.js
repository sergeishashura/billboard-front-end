import landingInterceptor from "../axios-configs/landingInterceptor";
import { USERS_URL } from "../urls";

export const getUsers = async () => {
  try {
    return landingInterceptor.get(USERS_URL);
  } catch (error) {
    throw error;
  }
};
