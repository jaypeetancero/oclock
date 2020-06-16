import { RoutesData } from "../interfaces/routes";
import Attendance from "../components/attendance";
import Admin from "../components/admin";

const routes: Array<RoutesData> = [
  {
    component: Attendance,
    path: "/attendance",
  },
  {
    component: Attendance,
    path: "/oclock/attendance",
  },
  {
    component: Attendance,
    path: "/oclock",
  },
  {
    component: Admin,
    path: "/",
  },
];

export default routes;
