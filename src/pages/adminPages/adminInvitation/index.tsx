import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Page from "@/components/custom/Page";
import { FaHome } from "react-icons/fa";
import { ShowInvitations } from "./showInvitation";
import { useEffect, useState } from "react";
import { InviteModal } from "./InviteModal";
import { queryProps } from "@/types";
import { useGetAllUsers } from "@/hooks/users/query";
import { FiUserPlus } from "react-icons/fi";

const Invitation = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [startIndex, setStartIndex] = useState<number>(0);
  const [filter, setFilter] = useState<any>();

  // GET API to fetch all users
  const { data: allUsers, refetch }: queryProps = useGetAllUsers({
    query: {
      keyword: keyword,
      limit: 10,
      page: startIndex,
      isActive: filter === "active" ? true : filter === "pending" ? false : "",
    },
  });

  useEffect(() => {
    refetch();
  }, [keyword, filter]);

  return (
    <>
      <Page
        title="Invitations"
        breadcrumbs={[
          {
            name: "Home",
            path: "/dashboard",
            icon: <FaHome />,
          },
          {
            name: "Invitation",
            path: "/invitations",
            icon: <FiUserPlus />,
          },
        ]}
        primaryAction={
          <Button
            onClick={() => setIsOpenModal(!isOpenModal)}
            className="lg:mr-16"
          >
            Invite People
          </Button>
        }
      >
        <div className="tabs w-11/12 mx-auto mt-3 lg:mt-5">
          <ShowInvitations
            allUsers={allUsers}
            setKeyword={setKeyword}
            startIndex={startIndex}
            setStartIndex={setStartIndex}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </Page>

      <Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Invite People</DialogTitle>
          </DialogHeader>
          <InviteModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            refetch={refetch}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Invitation;
