import { RoutesData } from "../interfaces/routes";
import Attendance from "../components/attendance";
import Admin from "../components/admin";

const routes: Array<RoutesData> = [
  {
    component: Admin,
    path: "/oclock/admin",
  },
  {
    component: Attendance,
    path: "/",
  },
  {
    component: Attendance,
    path: "/oclock/attendance",
  },
];

export default routes;
