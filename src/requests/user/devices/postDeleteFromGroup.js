import landingInterceptor from "../../axios-configs/landingInterceptor";
import { DELETE_DEVICE_FROM_GROUP_URL } from "../../urls";

export const postDeleteFromGroup = async (device_id, group_id) => {
  try {
    return landingInterceptor.post(DELETE_DEVICE_FROM_GROUP_URL, {
      device_id: +device_id,
      group_id: +group_id,
    });
  } catch (error) {
    throw error;
  }
};
