import landingInterceptor from "../../axios-configs/landingInterceptor";
import { USER_DEVICES_GROUP_URL } from "../../urls";

export const getDevicesGroups = async () => {
  try {
    return landingInterceptor.get(USER_DEVICES_GROUP_URL);
  } catch (error) {
    throw error;
  }
};
