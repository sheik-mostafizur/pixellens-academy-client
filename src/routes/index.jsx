import {createBrowserRouter} from "react-router-dom";
import RoutesForPublic from "./RoutesForPublic";
import RoutesForAdmin from "./RoutesForAdmin";
import RoutesForInstructor from "./RoutesForInstructor";
const Routes = createBrowserRouter([...RoutesForPublic, ...RoutesForAdmin, ...RoutesForInstructor]);
export default Routes;
