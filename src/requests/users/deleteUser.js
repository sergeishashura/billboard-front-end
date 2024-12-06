import landingInterceptor from "../axios-configs/landingInterceptor";
import { DELETE_USER_URL } from "../urls";

export const deleteUser = async (userId) => {
  try {
    return landingInterceptor.post(DELETE_USER_URL, {
      id: userId,
    });
  } catch (error) {
    throw error;
  }
};
