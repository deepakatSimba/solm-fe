import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaEye } from "react-icons/fa";

const Notification = () => {
  return (
    <>
      <div className="z-20 w-[29rem] max-w-xs md:max-w-md bg-white divide-y divide-gray-100 rounded-lg shadow">
        <div className="block px-3 md:px-4 py-1 md:py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50">
          Notifications
        </div>
        <div className="divide-y divide-gray-100 ">
          <a className="flex px-4 py-3 hover:bg-gray-100 ">
            <div className="flex-shrink-0">
              <Avatar>
                <AvatarImage
                  // src="https://github.com/shadcn.png"
                  alt="img"
                />
                <AvatarFallback>FW</AvatarFallback>
              </Avatar>
            </div>
            <div className="w-full ps-3">
              <div className="text-gray-500 text-sm mb-1.5 ">
                Family words is assigned to you
              </div>
              <div className="text-xs text-blue-600 ">a few moments ago</div>
            </div>
          </a>
        </div>
        <a className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 ">
          <div className="element-center gap-1 cursor-pointer">
            <div className="text-gray-500 text-lg">
              <FaEye />
            </div>
            View all
          </div>
        </a>
      </div>
    </>
  );
};

export default Notification;
