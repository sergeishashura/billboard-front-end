export const HOST = "http://158.160.20.51/api";

export const AD_URL = `${HOST}/ads/view`;

//------------------------------USER------------------------------

export const LOGIN_URL = `${HOST}/login`;

export const SIGNUP_URL = `${HOST}/registration`;

export const USER_URL = `${HOST}/user`;

export const STATISTIC_URL = `${USER_URL}/statistic`;

export const USER_MEDIA_URL = `${USER_URL}/media`;

export const DEVICE_URL = `${USER_URL}/device`;

export const USER_DEVICES_URL = `${DEVICE_URL}/list`;

export const FREE_DEVICES_URL = `${DEVICE_URL}/add/check`;

export const USER_DEVICES_GROUP_URL = `${DEVICE_URL}/group`;

export const CREATE_GROUP_URL = `${DEVICE_URL}/group/create`;

export const USER_DEVICES_ADD_URL = `${DEVICE_URL}/group/add`;

export const DELETE_DEVICE_FROM_GROUP_URL = `${DEVICE_URL}/group/delete`;

export const GROUP_DEVICES_URL = `${USER_DEVICES_GROUP_URL}/setup`;

export const USER_SCHEDULE_LIST = `${USER_URL}/schedule/list`;

export const USER_SCHEDULE_URL = `${USER_URL}/schedule/setting`;

export const USER_UPDATE_SCHEDULE_URL = `${USER_URL}/schedule/setting/update/save`;

//------------------------------ADMIN------------------------------

export const ADMIN_URL = `${HOST}/admin`;

export const USERS_URL = `${ADMIN_URL}/users`;

export const DELETE_USER_URL = `${ADMIN_URL}/user/delete`;

export const USER_LOGS_URL = `${ADMIN_URL}/log/get`;

export const MEDIA_URL = `${ADMIN_URL}/media`;

export const DELETE_MEDIA_URL = `${ADMIN_URL}/media/delete`;

export const DEVICES_URL = `${ADMIN_URL}/devices`;

export const ADD_DEVICES_URL = `${ADMIN_URL}/device/add`;

export const DELETE_DEVICES_URL = `${ADMIN_URL}/device/delete`;
