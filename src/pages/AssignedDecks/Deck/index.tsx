import Page from "@/components/custom/Page";
import { FaHome } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Loader from "@/components/custom/Spin";
import { SetCard } from "./SetCard";
import { useGetSetProgress } from "@/hooks/setProgress/query";
import { queryProps } from "@/types";

const Deck = () => {
  const { deckId, deckNo } = useParams();

  // GET API to fetch sets and set progress
  const {
    data: allSets,
    isLoading,
    isFetching,
  }: queryProps = useGetSetProgress({
    query: {
      deckId,
    },
  });

  const deckTitle = allSets?.setProgress?.[0]?.deckDetails?.name;

  return (
    <>
      <Page
        breadcrumbs={[
          {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
          },
          {
            name: "Decks",
            path: "/decks",
            icon: <MdCollections />,
          },
          {
            name: deckTitle,
            path: `/decks/${deckNo}/${deckId}`,
            icon: <BsCollectionFill />,
          },
        ]}
      >
        <div className="mt-3 lg:mt-5 xl:w-[90%] mx-auto">
          <div>
            <span className="text-lg font-semibold my-2">Progress</span>
            <div className="flex gap-2 items-center xl:w-[90%]">
              <Progress
                value={
                  allSets?.totalPercentage && allSets?.totalPercentage.toFixed()
                }
              />
              <Badge>
                {allSets?.totalPercentage
                  ? allSets?.totalPercentage.toFixed()
                  : 0}
                %
              </Badge>
            </div>
            {/* // Title */}
            <div className="text-xl font-semibold my-2">{deckTitle}</div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 xl:gap-2">
              {allSets?.setProgress?.map((item: any, idx: number) => (
                <SetCard item={item} key={item?._id} setNo={idx + 1} />
              ))}
            </div>
          </div>
        </div>
        {(isLoading || isFetching) && <Loader />}
      </Page>
    </>
  );
};

export default Deck;
