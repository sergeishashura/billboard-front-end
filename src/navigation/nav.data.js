import { AdvertisementsList } from "../pages/secure/Advertisements/AdvertisementsList";
import { Statistics } from "../pages/secure/Advertisements/Statistics";
import { DeviceList } from "../pages/secure/DeviceList/DeviceList";
import { DevicesGroupList } from "../pages/secure/DeviceList/DevicesGroupList";
import { Timetable } from "../pages/secure/Timetable/Timetable";
import {
  AD_STATISTIC_URL,
  AD_URL,
  DIVICES_LIST,
  DIVICES_GROUP_LIST,
  TIMETABLE_URL,
} from "./routes";

export const routes = [
  {
    path: AD_URL,
    element: <AdvertisementsList />,
  },
  {
    path: AD_STATISTIC_URL,
    element: <Statistics />,
  },
  {
    path: DIVICES_LIST,
    element: <DeviceList />,
  },
  {
    path: DIVICES_GROUP_LIST,
    element: <DevicesGroupList />,
  },
  {
    path: TIMETABLE_URL,
    element: <Timetable />,
  },
];
