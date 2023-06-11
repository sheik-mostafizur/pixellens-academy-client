import {Outlet} from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import {Helmet} from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | PixelLens Academy</title>
      </Helmet>
      <DashboardMenu />
      <div className="p-4 sm:ml-64">
        <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
