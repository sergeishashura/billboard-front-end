import landingInterceptor from "../../axios-configs/landingInterceptor";
import { USER_DEVICES_ADD_URL } from "../../urls";

export const postAddDeviceToGroup = (device_id, group_id) => {
  try {
    return landingInterceptor.post(USER_DEVICES_ADD_URL, {
      device_id: +device_id,
      group_id: +group_id,
    });
  } catch (error) {
    throw error;
  }
};
