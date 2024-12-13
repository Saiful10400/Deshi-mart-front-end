import { Outlet } from "react-router";
import DashboardAside from "../Component/Dashboard/DashboardAside";
import DashboardHeader from "../Component/Dashboard/DashboardHeader";

const AdminDashboard = () => {
  return (
    <div className="flex items-start gap-10">
      <div className="lg:w-[15%]">
        <DashboardAside />
      </div>
      <div className="lg:w-[85%] flex flex-col gap-7 lg:px-10">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
