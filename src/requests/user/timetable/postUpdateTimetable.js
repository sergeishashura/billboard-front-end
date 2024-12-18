import landingInterceptor from "../../axios-configs/landingInterceptor";
import { USER_UPDATE_SCHEDULE_URL } from "../../urls";

export const postUpdateTimetable = async (data) => {
  try {
    return landingInterceptor.post(USER_UPDATE_SCHEDULE_URL, data);
  } catch (error) {
    throw error;
  }
};
