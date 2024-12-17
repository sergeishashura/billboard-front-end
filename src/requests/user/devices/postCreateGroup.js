import landingInterceptor from "../../axios-configs/landingInterceptor";
import { CREATE_GROUP_URL } from "../../urls";

export const postCreateGroup = async (name) => {
  try {
    return landingInterceptor.post(CREATE_GROUP_URL, {
      group_name: name,
    });
  } catch (error) {
    throw error;
  }
};
