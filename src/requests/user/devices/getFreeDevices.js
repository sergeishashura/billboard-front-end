import landingInterceptor from "../../axios-configs/landingInterceptor";
import { FREE_DEVICES_URL } from "../../urls";

export const getFreeDevices = async () => {
  try {
    return landingInterceptor.get(FREE_DEVICES_URL);
  } catch (error) {
    throw error;
  }
};
