import logo from "../../assets/images/solmLogo.svg";
import profile from "../../assets/images/profile.png";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAtom } from "jotai";
import { meUser } from "@/store";
import { logout } from "@/services/auth";
import { useNavigate } from "react-router-dom";
import Notification from "@/pages/Notification";

const Header = () => {
  const [loggedInUser] = useAtom(meUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(() => {
      localStorage.clear();
      window.location.replace("/");
    });
  };

  return (
    <nav className="flex justify-between px-5 lg:px-12 items-center h-[72px] py-2 md:py-5 border-b border-[#0000001f]">
      <div className="logo mr-2">
        <img src={logo} className="h-fit" />
      </div>
      {/* <div className="search flex items-center rounded-full mr-2 w-[300px] md:w-[400px] 2xl:w-[600px] border px-2 border-gray-500">
        <AiOutlineSearch className="text-xl" />
        <Input className="border-none shadow-none" placeholder={`Search...`} />
      </div> */}
      <div className="info flex gap-3 lg:gap-8 py-2 unselectable">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* <button className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-full">
              <IoMdNotifications className="size-6 md:size-7" />
              <div className="absolute inline-flex items-center justify-center size-5 md:size-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full right-0 top-2 md:top-3">
                2
              </div>
            </button> */}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Notification />
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="profile px-1 bg-gray-200 rounded-full flex items-center my-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex gap-4 justify-start items-center sm:p-1">
                <span>
                  <Avatar>
                    <AvatarImage src={profile} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </span>
                <div className="hidden md:flex flex-col">
                  <div className="text-neutral-800 text-sm lg:text-base font-medium min-w-[150px] xl:min-w-[180px]">
                    {/* {loggedInUser?.[0]?.name} */}
                    Piotr
                  </div>
                  <div className="text-neutral-400 text-sm lg:text-base font-normal capitalize">
                    {/* {loggedInUser?.[0]?.role} */}
                    Global VP
                  </div>
                </div>
                <span className="hidden md:block">
                  <IoMdArrowDropdown className="text-xl" />
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-1 border mr-1">
              <DropdownMenuItem
                className="min-w-[150px] md:min-w-[200px] xl:min-w-[250px]"
                onClick={() =>
                  navigate(`/my-account/${loggedInUser?.[0]?._id}`)
                }
              >
                My Account
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Header;
