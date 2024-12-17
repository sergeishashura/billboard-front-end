import landingInterceptor from "../../axios-configs/landingInterceptor";
import { GROUP_DEVICES_URL } from "../../urls";

export const getGroupDevice = async (id) => {
  try {
    return landingInterceptor.post(GROUP_DEVICES_URL, {
      group_id: +id,
    });
  } catch (error) {
    throw error;
  }
};
