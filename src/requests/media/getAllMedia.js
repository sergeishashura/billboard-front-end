import landingInterceptor from "../axios-configs/landingInterceptor";
import { MEDIA_URL } from "../urls";

export const getAllMedia = async () => {
  try {
    return landingInterceptor.get(MEDIA_URL);
  } catch (error) {
    throw error;
  }
};
