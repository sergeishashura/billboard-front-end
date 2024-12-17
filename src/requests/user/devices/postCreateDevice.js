import landingInterceptor from "../../axios-configs/landingInterceptor";

export const postCreateDevice = async (params) => {
  try {
    return landingInterceptor.post();
  } catch (error) {
    throw error;
  }
};
