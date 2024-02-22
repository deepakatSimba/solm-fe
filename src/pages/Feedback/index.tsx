import Page from "@/components/custom/Page";
import { FaHome, FaStar } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { useGetFeedback } from "@/hooks/feedbackModal/query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { queryProps } from "@/types";
import dummyImage from "@/assets/images/dummyImage.avif";
import { SearchBar } from "@/components/custom/SearchBar/SearchBar";

const Feedback = () => {
  const { data: getFeedback }: queryProps = useGetFeedback();

  const renderStar = (index: number, rating: number) => {
    const filled = index <= rating;
    return (
      <span
        key={index}
        className={`cursor-pointer ${
          filled ? "text-yellow-500" : "text-gray-300"
        } text-2xl`}
      >
        <FaStar />
      </span>
    );
  };

  return (
    <div>
      <Page
        title="Feedback"
        breadcrumbs={[
          {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
          },
          {
            name: "Feedback",
            path: "/Feedback",
            icon: <MdOutlineFeedback />,
          },
        ]}
      >
        <div>
          <div className="flex items-center gap-x-3 md:flex-nowrap flex-wrap md:justify-start justify-end">
            <SearchBar />
          </div>
          <Table className="mt-2">
            <TableHeader className="bg-primary text-white">
              <TableRow className="text-lg">
                <TableHead className="p-3 pl-10">Word/Phrase</TableHead>
                <TableHead className="p-3 pl-10">Rating</TableHead>
                <TableHead className="p-3 pl-10">Tags</TableHead>
                <TableHead>Comment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getFeedback?.data?.map((item: any, idx: any) => (
                <>
                  <TableRow key={idx} className="text-base">
                    <TableCell>
                      <div className="flex items-center gap-5">
                        <div className="size-16">
                          <img
                            src={
                              item?.cardDetails?.image
                                ? item?.cardDetails?.image
                                : dummyImage
                            }
                            className="rounded-lg object-cover size-16 p-1"
                          />
                        </div>
                        {item?.cardDetails?.word?.punjabi}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((index) =>
                          renderStar(index, item?.rating)
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{item?.tags}</TableCell>
                    <TableCell width={400} className="py-5">
                      {item?.comment}
                    </TableCell>
                  </TableRow>
                  <Badge
                    variant="outline"
                    className="relative -top-3 left-[220%] border-primary text-primary bg-white"
                  >
                    {item.identity}
                  </Badge>
                </>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* </div> */}
      </Page>
    </div>
  );
};

export default Feedback;
