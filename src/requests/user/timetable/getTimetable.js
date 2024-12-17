import landingInterceptor from "../../axios-configs/landingInterceptor";
import { USER_SCHEDULE_URL } from "../../urls";

export const getTimetable = async (id) => {
  try {
    return landingInterceptor.post(USER_SCHEDULE_URL, {
      schedule_id: +id,
    });
  } catch (error) {
    throw error;
  }
};
