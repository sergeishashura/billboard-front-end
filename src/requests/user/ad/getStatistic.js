import landingInterceptor from "../../axios-configs/landingInterceptor";
import { STATISTIC_URL } from "../../urls";

export const getStatistic = async (ad_id) => {
  try {
    return landingInterceptor.post(STATISTIC_URL, {
      ad_id: +ad_id,
    });
  } catch (error) {
    throw error;
  }
};
