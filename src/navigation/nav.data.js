import { AdminDevicesPage } from "../pages/admin/devices/AdminDevicesPage";
import { MediaPage } from "../pages/admin/media/MediaPage";
import { LogsPage } from "../pages/admin/users/LogsPage";
import UsersPage from "../pages/admin/users/UsersPage";
import { AdvertisementsList } from "../pages/user/Advertisements/AdvertisementsList";
import { Statistics } from "../pages/user/Advertisements/Statistics";
import { DeviceList } from "../pages/user/DeviceList/DeviceList";
import { DevicesGroupList } from "../pages/user/DeviceList/DevicesGroupList";
import { ChangeGroup } from "../pages/user/DeviceList/СhangeGroup";
import { ChangeTimetable } from "../pages/user/Timetable/ChangeTimetable";
import { Timetable } from "../pages/user/Timetable/Timetable";
import {
  AD_STATISTIC_URL,
  AD_URL,
  DEVICES_URL,
  DIVICES_GROUP_URL,
  TIMETABLE_URL,
  ADMIN_DEVICES_URL,
  MEDIA_URL,
  USERS_URL,
  USER_LOGS_URL,
  CHANGE_GROUP_URL,
  CHANGE_TIMETABLE_URL,
} from "./routes";

export const userRoutes = [
  {
    path: AD_URL,
    element: <AdvertisementsList />,
  },
  {
    path: AD_STATISTIC_URL,
    element: <Statistics />,
  },
  {
    path: DEVICES_URL,
    element: <DeviceList />,
  },
  {
    path: DIVICES_GROUP_URL,
    element: <DevicesGroupList />,
  },
  {
    path: TIMETABLE_URL,
    element: <Timetable />,
  },
  {
    path: CHANGE_TIMETABLE_URL,
    element: <ChangeTimetable />,
  },
  {
    path: CHANGE_GROUP_URL,
    element: <ChangeGroup />,
  },
];

export const adminRoutes = [
  {
    path: ADMIN_DEVICES_URL,
    element: <AdminDevicesPage />,
  },
  {
    path: MEDIA_URL,
    element: <MediaPage />,
  },
  {
    path: USERS_URL,
    element: <UsersPage />,
  },
  {
    path: USER_LOGS_URL,
    element: <LogsPage />,
  },
];
