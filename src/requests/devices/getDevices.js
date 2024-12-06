import landingInterceptor from "../axios-configs/landingInterceptor";
import { DEVICES_URL } from "../urls";

export const getDevices = async () => {
  try {
    return landingInterceptor.get(DEVICES_URL);
  } catch (error) {
    throw error;
  }
};
