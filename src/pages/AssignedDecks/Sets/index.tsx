import Page from "@/components/custom/Page";
import { FaHome } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CardList } from "./CardList";
import { useGetCardProgress } from "@/hooks/cardProgress/query";
import { useDeleteCardProgress } from "@/hooks/cardProgress/mutation";
import NoDataFound from "@/components/custom/NoDataFound";
import { queryProps } from "@/types";
import Loader from "@/components/custom/Spin";

const Sets = () => {
  const navigate = useNavigate();
  const { setId, deckId, deckNo, setNo } = useParams();

  // GET API to fetch all cards and card progress
  const {
    data: cardsData,
    isLoading,
    isFetching,
  }: queryProps = useGetCardProgress({
    query: {
      setId,
    },
  });

  // DELETE API to delete card progress
  const deleteCardProgress = useDeleteCardProgress();

  const onRestart = async () => {
    await cardsData?.cardProgress.map((data: any) =>
      deleteCardProgress.mutateAsync({
        pathParams: { cardId: data?._id },
      })
    );
    navigate("cards");
  };

  const deckTitle = cardsData?.cardProgress?.[0]?.setDetails?.deckDetails?.name;
  const setTitle = cardsData?.cardProgress?.[0]?.setDetails?.word;
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
            name: deckTitle ? deckTitle : "Set",
            path: `/decks/${deckNo}/${deckId}`,
            icon: <BsCollectionFill />,
          },
          {
            name: setTitle ? setTitle : "Title",
            path: `/decks/${deckNo}/${deckId}/sets/${setNo}/${setId}`,
            icon: <BsCollectionFill />,
          },
        ]}
      >
        <div className="max-w-4xl mx-auto">
          <span className="text-lg font-semibold my-2">Progress</span>
          <div className="flex gap-2 items-center">
            <Progress
              value={
                cardsData?.totalPercentage &&
                cardsData?.totalPercentage.toFixed()
              }
            />
            <Badge>
              {cardsData?.totalPercentage
                ? cardsData?.totalPercentage.toFixed()
                : 0}
              %
            </Badge>
          </div>
          <div className="text-xl font-semibold my-2">
            Set {setNo} - {setTitle}
          </div>
          <div className="flex justify-between items-end mt-3 mb-2">
            <div className="text-lg font-semibold">
              Assigned Cards
              <span className="text-[#5A5A5A] ml-2">
                {cardsData?.cardProgress ? cardsData?.cardProgress.length : 0}{" "}
                cards
              </span>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => navigate(`cards`)}>Start</Button>
              <Button onClick={onRestart}>Restart</Button>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col mt-5 gap-2">
            {cardsData?.cardProgress ? (
              cardsData?.cardProgress?.map((item: any) => (
                <CardList item={item} key={item?._id} />
              ))
            ) : (
              <div>
                <NoDataFound text="No Cards Found" />
              </div>
            )}
          </div>
        </div>
      </Page>

      {(isLoading || isFetching) && <Loader />}
    </>
  );
};

export default Sets;
