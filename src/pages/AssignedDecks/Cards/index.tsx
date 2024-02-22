import Page from "@/components/custom/Page";
import { FaHome } from "react-icons/fa";
import {
  MdCollections,
  MdOutlineFeedback,
  MdOutlineReplay,
} from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiGalleryFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { CardImage } from "./CardImage";
import { CiBookmarkMinus } from "react-icons/ci";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Transliterate } from "./Transliterate";
import { useParams } from "react-router-dom";
import { BookmarkModal } from "./BookmarkModal";
import VirtualKeyboard from "@/components/custom/VirtualKeyboard";
// import { AudioPlayer } from "./AudioPlayer";
import { FeedbackModal } from "./FeedbackModal";
import Loader from "@/components/custom/Spin";
import { useGetCardProgress } from "@/hooks/cardProgress/query";
import { queryProps } from "@/types";
import { useAtom } from "jotai";
import { activeCard } from "@/store";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  IoPlayBackOutline,
  IoPlayForwardOutline,
  IoPlayOutline,
} from "react-icons/io5";
import { PiPauseLight } from "react-icons/pi";
import ReactPlayer from "react-player";

const Cards = () => {
  const [isFeedbackModal, setIsFeedbackModal] = useState<boolean>(false);
  const [isBookmarkPopover, setIsBookmarkPopover] = useState<boolean>(false);
  const [displayItem, setDisplayItem] = useState<any>({
    text: "",
    series: [{ type: "", english: "", letter: "", id: "" }],
    imgSrc: "",
  });
  const [currentletterCompletedLength, setCurrentletterCompletedLength] =
    useState(0);
  const [incorrectLetter, setIncorrectLetter] = useState(null);
  const [correctLetter, setCorrectLetter] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentCard] = useAtom(activeCard);
  const [nextWord, setNextWord] = useState<boolean>(false);

  const { setId, deckId, deckNo, setNo } = useParams();

  const gurmukhiIncorrectLetter = Transliterate(incorrectLetter); //replace english to gurmukhi

  // GET API to fetch all cards and card progress
  const {
    data: cardsData,
    refetch,
    isFetching,
  }: queryProps = useGetCardProgress({
    query: {
      setId,
    },
  });

  let typedLetterProgress: any = Number(
    (currentletterCompletedLength / displayItem?.series.length) * 100
  );

  const deckTitle = cardsData?.cardProgress?.[0]?.setDetails?.deckDetails?.name;
  const setTitle = cardsData?.cardProgress?.[0]?.setDetails?.word;

  const lengthofword = displayItem?.series?.length;

  useEffect(() => {
    cardsData?.cardProgress.forEach((obj: any, index: number) => {
      obj.idx = index + 1;
    });
  }, [cardsData]);

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
        <div className="min-h-[76vh] mt-6 relative">
          <div className="flex gap-3 items-center relative">
            <div className="absolute -top-7">
              <Badge
                variant="outline"
                className="border-secondary text-[10px] mr-1 font-normal"
              >
                Set
                <span className=" pl-1">
                  {setNo}/
                  {
                    cardsData?.cardProgress?.[0]?.setDetails?.deckDetails
                      ?.numberOfSets
                  }
                </span>
              </Badge>
              <Badge
                variant="outline"
                className="border-secondary text-[10px] font-normal"
              >
                Deck <span className=" pl-1">{deckNo}</span>
              </Badge>
            </div>
            <Badge
              variant="outline"
              className="border-primary border-2 text-lg px-5"
            >
              Card{" "}
              <span className="text-primary pl-3">
                {/* {cardsData?.cardProgress.length} */}
                {currentCard?.idx}
              </span>
            </Badge>
            <div className="flex gap-2 items-center w-full">
              <Progress
                value={typedLetterProgress && typedLetterProgress.toFixed()}
              />
              <Badge>
                {typedLetterProgress ? typedLetterProgress.toFixed() : 0}%
              </Badge>
            </div>
          </div>
          <div className="tabs mt-1 flex flex-col">
            <Tabs defaultValue="image">
              <div className="flex justify-end mr-2 lg:mr-5 xl:mr-20">
                {currentCard?.image && (
                  <TabsList className="flex bg-transparent">
                    <TabsTrigger
                      className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
                      value="image"
                    >
                      <span className="flex items-center gap-1">
                        <RiGalleryFill /> Illustrations
                      </span>
                    </TabsTrigger>
                  </TabsList>
                )}
                <div className="mt-2">
                  <div
                    className="flex items-center gap-2 ml-4 cursor-pointer"
                    onClick={() => setIsFeedbackModal(true)}
                  >
                    <MdOutlineFeedback /> Feedback
                  </div>
                  <div className="flex justify-end mt-5 text-2xl gap-4">
                    {/* <AudioPlayer
                      isPlaying={isPlaying}
                      setIsPlaying={setIsPlaying}
                    /> */}

                    <div
                      className="cursor-pointer relative"
                      onClick={() => setIsBookmarkPopover(true)}
                    >
                      <span onClick={() => setIsBookmarkPopover(true)}>
                        <CiBookmarkMinus />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <TabsContent value="image" className="flex justify-center">
                <section>
                  {/* Image 🌍 */}
                  {currentCard?.image && (
                    <CardImage image={currentCard?.image} />
                  )}
                  {/* full word/sentence */}
                  <div
                    className={`element-center text-base lg:text-2xl ${
                      !currentCard?.image && "text-xl lg:text-3xl"
                    } text-gray-400 mt-2`}
                  >
                    {displayItem?.punjabi}
                  </div>
                  <div className="flex items-center justify-center my-3">
                    {/* ---- User typed word ---- */}
                    <div className="relative h-16 min-w-[150px] rounded-md flex flex-col items-center justify-center text-3xl">
                      <div className="h-8">{correctLetter}</div>

                      {/* Upcoming letter ----> */}
                      {displayItem?.series[currentletterCompletedLength]
                        ?.letter && (
                        <div className="absolute -right-14 rounded-sm min-w-min w-14 h-16 border">
                          <div className="h-full text-primary text-2xl lg:text-3xl element-center animate__animated animate__pulse">
                            {
                              displayItem?.series[currentletterCompletedLength]
                                ?.letter
                            }
                          </div>
                        </div>
                      )}

                      {/* Incorrect letter */}
                      {displayItem?.series[currentletterCompletedLength]
                        ?.letter &&
                        gurmukhiIncorrectLetter && (
                          <div className="absolute -right-28 ml-3 rounded-sm min-w-min w-14 h-16 border">
                            <div className="text-red-500 h-full text-2xl lg:text-3xl element-center animate__animated animate__headShake">
                              {gurmukhiIncorrectLetter}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </section>
              </TabsContent>
            </Tabs>
            {/* Virtual Keyboard */}
            <div
              className={`max-w-6xl mx-auto mt-2 min-w-fit ${
                currentletterCompletedLength === lengthofword && "hidden"
              }`}
            >
              <VirtualKeyboard
                displayItem={displayItem}
                setDisplayItem={setDisplayItem}
                incorrectLetter={incorrectLetter}
                setIncorrectLetter={setIncorrectLetter}
                currentletterCompletedLength={currentletterCompletedLength}
                setCurrentletterCompletedLength={
                  setCurrentletterCompletedLength
                }
                isFeedbackModal={isFeedbackModal}
                isBookmarkPopover={isBookmarkPopover}
                cardsData={cardsData?.cardProgress}
                refetchCard={refetch}
                correctLetter={correctLetter}
                setCorrectLetter={setCorrectLetter}
                nextWord={nextWord}
                setNextWord={setNextWord}
              />
            </div>

            {/* ------word completion modal------- */}

            {currentletterCompletedLength === lengthofword && (
              <>
                <div className="absolute shadow-md rounded-sm p-2 bottom-0 w-full border bg-[#E4F5DD] h-[160px] md:h-[180px] ">
                  <div className="flex justify-between mt-2 md:mt-5 lg:mt-8">
                    <div className="w-full p-2 text-center text-base lg:text-xl">
                      <h2 className="font-semibold text-primary">
                        Word/Phrase{" "}
                        <span className="text-gray-700 font-medium pl-5">
                          "{currentCard?.word?.punjabi}"
                        </span>
                      </h2>
                      <Separator className="my-3" />
                      <h2 className="font-semibold text-primary">
                        Meaning
                        <span className="text-gray-700 font-medium pl-5">
                          "{currentCard?.word?.english}"
                        </span>
                      </h2>
                    </div>
                    <div className="w-full space-x-5 element-center flex flex-col md:flex-row">
                      <Button variant="outline">Practice Again</Button>
                      <Button
                        className="mt-4 md:mt-0"
                        onClick={() => setNextWord(true)}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-end mt-5 text-2xl gap-4 relative -top-52">
                    <div className="element-center text-2xl text-gray-800 border p-2 bg-">
                      <div className="flex gap-3">
                        <span className="cursor-pointer">
                          <MdOutlineReplay />
                        </span>
                        <span className="cursor-pointer">
                          <IoPlayBackOutline />
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? <PiPauseLight /> : <IoPlayOutline />}
                        </span>
                        <span className="cursor-pointer">
                          <IoPlayForwardOutline />
                        </span>
                      </div>
                      <ReactPlayer
                        url={
                          cardsData?.audioId
                            ? cardsData?.audioId
                            : ""
                        }
                        playing={isPlaying}
                        controls={false}
                        config={{
                          file: {
                            forceAudio: true,
                          },
                        }}
                        width="0"
                        height="0"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Page>

      {isFetching && <Loader />}

      {/* feedback modal */}
      <Dialog open={isFeedbackModal} onOpenChange={setIsFeedbackModal}>
        <DialogContent className="sm:max-w-[425px]">
          <FeedbackModal setIsFeedbackModal={setIsFeedbackModal} />
        </DialogContent>
      </Dialog>

      {/* bookmark modal */}
      <Dialog open={isBookmarkPopover} onOpenChange={setIsBookmarkPopover}>
        <DialogContent className="sm:max-w-[425px]">
          <BookmarkModal
            isBookmarkPopover={isBookmarkPopover}
            setIsBookmarkPopover={setIsBookmarkPopover}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Cards;
