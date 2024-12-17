import landingInterceptor from "../../axios-configs/landingInterceptor";
import { DELETE_MEDIA_URL } from "../../urls";

export const deleteMedia = async (media_id) => {
  try {
    return landingInterceptor.post(DELETE_MEDIA_URL, {
      id: media_id,
    });
  } catch (error) {
    throw error;
  }
};
