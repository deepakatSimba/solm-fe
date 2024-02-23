import { useEffect, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { CgMenuGridR } from "react-icons/cg";
import dashboard from "@/assets/images/dashboard.png";
import chat from "@/assets/images/chat.svg";
import request from "@/assets/images/request.svg";

const sidebarOptions = [
  {
    id: 0,
    icon: dashboard,
    label: "Dashboard",
    redirect: "/dashboard",
  },
  {
    id: 1,
    icon: chat,
    label: "All Request",
    redirect: "/all-hires",
  },
  {
    id: 1,
    icon: request,
    label: "All Request",
    redirect: "/all-requests",
  },
];
const Sidebar = () => {
  const navigate = useNavigate();
  const pathName = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth > 768 ? (
        <div
          className={`flex border-r border-[#0000001f] flex-col justify-between h-[90vh] lg:h-[92vh]
          `}
          style={{
            width: isSidebarOpen ? "280px" : "70px",
            transition: "all 0.3s ease-in-out ",
            overflowX: "hidden",
          }}
        >
          <div className="options mt-8">
            {sidebarOptions?.map((val: any) => (
              <div
                key={val?.id}
                className={`flex justify-start items-center gap-2 my-2 cursor-pointer ${
                  pathName?.pathname?.includes(val?.redirect)
                    ? "bg-gray-200 border-r-4 border-primary"
                    : ""
                } ml-3 px-2 pl-3 rounded-l-3xl`}
                onClick={() => navigate(val?.redirect)}
              >
                <span
                  className={`text-lg xl:text-xl py-3 ${
                    pathName?.pathname?.includes(val?.redirect)
                      ? "filter-orange"
                      : ""
                  }`}
                >
                  <img src={val?.icon} alt={val?.icon} className="size-[26px]" />
                </span>
                {isSidebarOpen && (
                  <div
                    className={`text-sm xl:text-md 2xl:text-lg font-medium inline-flex flex-nowrap whitespace-nowrap ${
                      pathName?.pathname?.includes(val?.redirect)
                        ? "font-semibold"
                        : "text-stone-900 hover:text-primary"
                    }`}
                  >
                    {val?.label}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div
            className="action pl-5"
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            {isSidebarOpen ? (
              <AiOutlineMenuFold className="text-lg xl:text-2xl hover:text-gray-600 mb-6 cursor-pointer" />
            ) : (
              <AiOutlineMenuUnfold className="text-lg xl:text-2xl hover:text-gray-600 mb-6 cursor-pointer" />
            )}
          </div>
        </div>
      ) : (
        // mobile
        <div className="flex">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="fixed bottom-3 left-5 z-10 p-1 text-2xl"
              >
                <CgMenuGridR />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-1 w-[250px]">
              <div className="flex flex-col justify-between h-full pr-2">
                <div className="options m-1 mt-8">
                  {sidebarOptions?.map((val: any) => (
                    <div
                      key={val?.id}
                      className="flex justify-start items-center gap-2 my-2 cursor-pointer"
                      onClick={() => {
                        navigate(val?.redirect);
                        setIsOpen(false);
                      }}
                    >
                      {pathName?.pathname?.includes(val?.redirect) ? (
                        <div className="h-12 w-1 rounded-tr-xl rounded-br-xl bg-primary" />
                      ) : (
                        <div className="h-12 w-2" />
                      )}
                      <span
                        className={`text-lg xl:text-xl pl-1 ${
                          pathName?.pathname?.includes(val?.redirect)
                            ? "text-primary shadow-white shadow-md bg-gray-100"
                            : ""
                        }`}
                      >
                        {val?.icon}
                      </span>
                      <div
                        className={` text-sm xl:text-md 2xl:text-lg font-[500]  leading-normal ${
                          pathName?.pathname?.includes(val?.redirect)
                            ? "text-primary shadow-md shadow-white"
                            : "text-stone-900"
                        }`}
                      >
                        {val?.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};

export default Sidebar;
