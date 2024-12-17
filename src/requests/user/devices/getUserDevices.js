import landingInterceptor from "../../axios-configs/landingInterceptor";
import { USER_DEVICES_URL } from "../../urls";

export const getUserDevices = async () => {
  try {
    return landingInterceptor.get(USER_DEVICES_URL);
  } catch (error) {
    throw error;
  }
};
