import landingInterceptor from "../../axios-configs/landingInterceptor";
import { USER_SCHEDULE_LIST } from "../../urls";

export const getTimetables = async () => {
  try {
    return landingInterceptor.get(USER_SCHEDULE_LIST);
  } catch (error) {
    throw error;
  }
};
