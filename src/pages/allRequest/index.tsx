import Page from "@/components/custom/Page";
import { SearchBar } from "@/components/custom/SearchBar/SearchBar";
import { FaHome } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import { RequestCard } from "./RequestCard";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import group from "@/assets/images/group.png";
import arrow from "@/assets/images/arrowDown.png";
import comment from "@/assets/images/comment.png";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AllRequest = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Page
        title="All Request"
        breadcrumbs={[
          {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
          },
          {
            name: "All Request",
            path: "/all-requests",
            icon: <MdCollections />,
          },
        ]}
      >
        <div className="max-w-[1250px] mx-auto mt-7">
          <SearchBar />

          <div className="mt-7">
            <RequestCard setIsOpen={setIsOpen} />
          </div>
          <div className="mt-7">
            <RequestCard setIsOpen={setIsOpen} />
          </div>
        </div>
      </Page>

      <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-[600px]">
          <SheetHeader>
            <SheetTitle className="border-b text-xl font-medium">
              Progress
            </SheetTitle>
          </SheetHeader>

          <div className="flex items-center gap-3 mt-4 text-lg font-medium">
            Hierarchy <img src={group} alt="img" />
          </div>

          <ul className="mt-4">
            <li className="p-1 flex justify-between items-center w-full">
              <div>
                <p className="font-medium text-base">Lidia Kanach</p>
                <p className="text-secondary font-medium text-sm">
                  Regional HR
                </p>
              </div>
              <div className="border border-secondary rounded-sm text-sm text-secondary p-0.5 px-2 font-semibold w-[104px] text-center">
                Approved
              </div>
            </li>
            <div>
              <img src={arrow} alt="arrow" className="ml-10 my-1" />
            </div>
            <li className="p-1 flex justify-between items-center w-full">
              <div>
                <p className="font-medium text-base">Lin Liang</p>
                <p className="text-secondary font-medium text-sm">
                  Regional President
                </p>
              </div>
              <div className="border border-[#E9B634] rounded-sm text-sm text-[#E9B634] p-0.5 px-2 font-semibold w-[104px] text-center">
                Pending
              </div>
            </li>
          </ul>

          <div className="absolute bottom-10 w-[90%]">
            <h3 className="flex gap-3 items-center border-b font-semibold text-lg">
              Comment
              <span>
                <img src={comment} alt="img" className="size-5" />
              </span>
            </h3>
            <div className="mt-3">
              <Textarea placeholder="Comment..." rows={3} />
              <div className="flex justify-end items-center gap-3 mt-5">
                <Button
                  variant="outline"
                  className="rounded-none border border-primary text-primary"
                >
                  Cancel
                </Button>
                <Button className="rounded-none">Add</Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default AllRequest;
