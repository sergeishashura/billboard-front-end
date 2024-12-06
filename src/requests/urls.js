export const HOST = "http://158.160.20.51:80";

//------------------------------USER------------------------------

export const LOGIN_URL = `${HOST}/login`;
export const SIGNUP_URL = `${HOST}/registration`;

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
