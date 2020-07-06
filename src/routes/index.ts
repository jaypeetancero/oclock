import { RoutesData } from "../interfaces/routes";
import Attendance from "../components/attendance";
import Admin from "../components/admin";
import DashboardContainer from "../components/admin/dashboardContainer";

export const nonAuthenticatedRoutes: Array<RoutesData> = [
  {
    component: Admin,
    path: "/admin",
  },
  {
    component: Attendance,
    path: "/",
  },
  {
    component: Attendance,
    path: "/attendance",
  },
];

export const authenticatedRoutes: Array<RoutesData> = [
  {
    component: DashboardContainer,
    path: "/",
  },
];
