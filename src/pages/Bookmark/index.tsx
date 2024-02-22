import Page from "@/components/custom/Page";
import { useEffect, useState } from "react";
import { IoBookmarks } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CreateFolder from "./folder";
import { FaHome } from "react-icons/fa";
import { SearchBar } from "@/components/custom/SearchBar/SearchBar";
import { Button } from "@/components/ui/button";
import { queryProps } from "@/types";
import { useGetFolder, useGetSingleFolder } from "@/hooks/bookmark/query";
import Loader from "@/components/custom/Spin";
import dummyImage from "@/assets/images/dummyImage.avif";

const Bookmark = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [singleFolderId, setSingleFolderId] = useState<string>("");

  // GET api to fetch all folders
  const { data: getAllFolders, isLoading: foldersLoading }: queryProps =
    useGetFolder({});

  // GET api to fetch single folder
  const {
    data: getSingleFolder,
    isLoading: singleFolderLoading,
    refetch: refetchTableData,
  }: queryProps = useGetSingleFolder({
    pathParams: { folderId: singleFolderId && singleFolderId },
  });

  useEffect(() => {
    if (singleFolderId) {
      setIsOpen(false);
      setSingleFolderId("");
    }
  }, [singleFolderId]);

  return (
    <>
      <Page
        title="Bookmarks Vocabulary"
        breadcrumbs={[
          {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
          },
          {
            name: "Bookmark ",
            path: "/bookmark",
            icon: <IoBookmarks />,
          },
        ]}
      >
        <div>
          <div className="flex items-center gap-x-3 md:flex-nowrap flex-wrap md:justify-start justify-end">
            <SearchBar />

            <Button onClick={() => setIsOpen(true)}>Select Folder</Button>
          </div>

          <Table className="mt-2">
            <TableHeader className="bg-primary text-white">
              <TableRow className="text-lg">
                <TableHead className="p-3 rounded-l-lg">Word/Phrase</TableHead>
                <TableHead className="rounded-r-lg">Meaning</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border-b">
              <>
                {(getSingleFolder?.data?.[0]?.bookmarkDetails
                  ? getSingleFolder?.data?.[0]?.bookmarkDetails
                  : getAllFolders?.data?.[0]?.bookmarkDetails
                )?.map((item: any) => (
                  <TableRow key={item?.cardDetails?._id} className="text-lg">
                    <TableCell>
                      <div className="flex items-center gap-5">
                        <div className="size-16">
                          <img
                            src={
                              item?.cardDetails?.image
                                ? item?.cardDetails?.image
                                : dummyImage
                            }
                            className="size-16 rounded-lg p-1"
                          />
                        </div>
                        {item?.cardDetails?.word?.punjabi}
                      </div>
                    </TableCell>
                    <TableCell>{item?.cardDetails?.word?.english}</TableCell>
                  </TableRow>
                ))}
                {/* {(!getAllFolders?.data?.[0]?.bookmarkDetails ||
                  getSingleFolder?.data?.[0]?.bookmarkDetails) && (
                  <NoDataFound />
                )} */}
              </>
            </TableBody>
          </Table>
        </div>
      </Page>

      <CreateFolder
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSingleFolderId={setSingleFolderId}
        refetchTableData={refetchTableData}
      />

      {foldersLoading && singleFolderLoading && <Loader />}
    </>
  );
};

export default Bookmark;
