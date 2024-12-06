import landingInterceptor from "../axios-configs/landingInterceptor";
import { USER_LOGS_URL } from "../urls";

export const getUserLogs = async (userId) => {
  try {
    return landingInterceptor.post(USER_LOGS_URL, {
      id: userId,
    });
  } catch (error) {
    throw error;
  }
};
