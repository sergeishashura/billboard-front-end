import landingInterceptor from "../../axios-configs/landingInterceptor";
import { DELETE_DEVICES_URL } from "../../urls";

export const deleteDevice = async (deviceId) => {
  try {
    return landingInterceptor.post(DELETE_DEVICES_URL, {
      id: deviceId,
    });
  } catch (error) {
    throw error;
  }
};
