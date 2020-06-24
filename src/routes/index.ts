import { RoutesData } from "../interfaces/routes";
import Attendance from "../components/attendance";
import Admin from "../components/admin";

const routes: Array<RoutesData> = [
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

export default routes;
