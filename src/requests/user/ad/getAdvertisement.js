import { AD_URL } from "../../urls";
import landingInterceptor from "../../axios-configs/landingInterceptor";

export const getAdvertisement = async (id) => {
  console.log(id);
  try {
    return landingInterceptor.post(AD_URL, {
      device_id: +id,
    });
  } catch (error) {
    throw error;
  }
};
