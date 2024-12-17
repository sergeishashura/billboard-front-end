import landingInterceptor from "../../axios-configs/landingInterceptor";
import { USER_MEDIA_URL } from "../../urls";

export const getAllAds = async () => {
  try {
    return landingInterceptor.get(USER_MEDIA_URL);
  } catch (error) {
    throw error;
  }
};
