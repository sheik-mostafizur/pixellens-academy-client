import {createBrowserRouter} from "react-router-dom";
import RoutesForPublic from "./RoutesForPublic";
import RoutesForAdmin from "./RoutesForAdmin";
import RoutesForInstructor from "./RoutesForInstructor";
import RoutesForStudent from "./RoutesForStudent";

const Routes = createBrowserRouter([
  ...RoutesForPublic,
  ...RoutesForStudent,
  ...RoutesForInstructor,
  ...RoutesForAdmin,
]);
export default Routes;
