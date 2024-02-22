import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

export const SearchBar = ({ handleChange }: any) => {
  return (
    <div className="flex my-2 lg:my-4 gap-x-3 w-full relative">
      <Input
        type="search"
        placeholder="Search..."
        onChange={handleChange}
        className="w-full text-sm pl-10 pr-5 py-3 relative"
      />
      <span className="absolute text-xl pt-2 pl-2">
        <IoSearchOutline />
      </span>
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-1 items-center">
              Status
              <span>
                <IoIosArrowDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuCheckboxItem
            // checked={showStatusBar}
            // onCheckedChange={setShowStatusBar}
            >
              Status Bar
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-1 items-center">
              Company Codes
              <span>
                <IoIosArrowDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-1 items-center">
              Region
              <span>
                <IoIosArrowDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-1 items-center">
            Location
              <span>
                <IoIosArrowDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-1 items-center">
              Function
              <span>
                <IoIosArrowDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </div>
  );
};
