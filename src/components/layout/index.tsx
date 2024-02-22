import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Toaster } from "../ui/toaster";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex w-full h-[90%] lg:h-[92%]">
        <Sidebar />
        <div className="bg-gray-200 w-full md:p-2 xl:p-4 h-[100%] overflow-scroll scrollbar-hide">
          {children}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
