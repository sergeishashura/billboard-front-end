import landingInterceptor from "../axios-configs/landingInterceptor";
import { ADD_DEVICES_URL } from "../urls";

export const postAddDevice = async () => {
  try {
    return landingInterceptor.post(ADD_DEVICES_URL);
  } catch (error) {
    throw error;
  }
};
