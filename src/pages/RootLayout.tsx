import Navbar from "../components/navbar/Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import RightSidebar from "./RightSidebar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between ">
        <div className="min-w-[15%] ">
          <Sidebar />
        </div>
        <div className="w-full p-7.5 ">
          <Outlet />
        </div>
        <div className="min-w-[5%] ">
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
