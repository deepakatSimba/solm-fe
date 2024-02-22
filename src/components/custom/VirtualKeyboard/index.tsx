// @ts-nocheck
import "./styles.css";
import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import useSound from "use-sound";
import success from "./sounds/success.mp3";
import fail from "./sounds/fail.mp3";
import typing from "./sounds/type.mp3";
// import useEventListener from "@use-it/event-listener";
import { useEventListener } from "usehooks-ts";
import { useAddCardProgress } from "@/hooks/cardProgress/mutation";
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { activeCard, meUser } from "@/store";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Loader from "../Spin";
import { useAddSetProgress } from "@/hooks/setProgress/mutate";

const wordIn = "animate__bounceIn";
const wordOut = "animate__bounceOut";
const shakeAnimation = "animate__headShake";
const fadeInAnimation = "animate__fadeIn";

// *main
const VirtualKeyboard = ({
  displayItem,
  setDisplayItem,
  currentletterCompletedLength,
  setCurrentletterCompletedLength,
  incorrectLetter,
  setIncorrectLetter,
  isBookmarkPopover,
  isFeedbackModal,
  correctLetter,
  setCorrectLetter,
  cardsData,
  refetchCard,
  nextWord,
  setNextWord,
}) => {
  const [currentCard, setCurrentCard] = useAtom(activeCard);
  const [playSuccess] = useSound(success);
  const [playFail] = useSound(fail);
  const [playType] = useSound(typing);
  const [animationClass, setAnimationClass] = useState(wordIn);
  const [loggedInUser] = useAtom(meUser);
  const [mistakes, setMistakes] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [keyButtonAnimation, setKeyButtonAnimation] =
    useState("animate__fadeIn");
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [keyboardMode, setKeyboardMode] = useState("natural");

  const { deckId, setId, deckNo, setNo } = useParams();

  const lengthofword = displayItem?.series?.length;
  const currentKey = displayItem?.series?.[currentletterCompletedLength];

  // POST API to track card progress
  const addCardProgress = useAddCardProgress();

  // POST API to add set progress
  const addSetProgress = useAddSetProgress();

  if (currentCard?.word) {
    setDisplayItem(currentCard?.word);
  }

  useEffect(() => {
    if (shouldAnimate) {
      setAnimationClass(wordOut);
      setTimeout(() => {
        setAnimationClass(wordIn);
        setShouldAnimate(false);
      }, 500);
    }
  }, [shouldAnimate]);

  useEffect(() => {
    refetchCard();
  }, []);

  useEffect(() => {
    if (cardsData) {
      setCurrentCard(cardsData.find((letter) => !letter.isCompleted));
    }
  }, [cardsData]);

  const handleWordAndProgress = () => {
    addCardProgress
      .mutateAsync({
        body: {
          mistakes: mistakes,
          startDate: "2024-01-10T10:18:37.000+00:00",
          endDate: "2024-01-10T10:18:37.000+00:00",
          cardId: currentCard?._id,
          studentId: loggedInUser?.[0]?.userId,
          setId: setId,
          isCompleted: true,
        },
      })
      .then((res) => {
        if (res) {
          refetchCard();
          setCurrentCard(cardsData.find((letter) => !letter.isCompleted));
          setCorrectLetter("");
          setCurrentletterCompletedLength(0);
          setNextWord(false);
          setIncorrectLetter("");
        }
      });
  };

  useEffect(() => {
    if (nextWord) {
      handleWordAndProgress();
    }
  }, [nextWord]);

  useEventListener("keydown", ({ key, ...rest }) => {
    if (!isFeedbackModal && !isBookmarkPopover) {
      if (key === displayItem.series[currentletterCompletedLength]?.english) {
        setKeyButtonAnimation("");
        setTimeout(() => {
          setKeyButtonAnimation("animate__fadeIn");
        }, 1);

        setCorrectLetter(
          (prev) =>
            prev + displayItem.series[currentletterCompletedLength]?.letter
        );
        playType();
        setIncorrectLetter("");
        setCurrentletterCompletedLength((l) => {
          if (l + 1 === lengthofword) {
            playSuccess();
            setIncorrectLetter("");
            // handleWordAndProgress(); // handle word mistakes/progress
            // setTimeout(() => {
            //   setCurrentletterCompletedLength(0);
            //   setCorrectLetter("");
            // }, 500);
          }
          return l + 1;
        });
      } else {
        if (!(key === "Shift")) {
          setIncorrectLetter(key);
          // Check if the letter is already in the state
          const existingLetter = mistakes.find(
            (letterObj) => letterObj.incorrectLetter === key
          );

          if (existingLetter) {
            // If the letter already exists, update its count
            setMistakes((prev) => {
              return prev.map((letterObj) =>
                letterObj.incorrectLetter === key
                  ? { ...letterObj, count: letterObj.count + 1 }
                  : letterObj
              );
            });
          } else {
            // If the letter doesn't exist, add it with count 1
            setMistakes((prev) => [
              ...prev,
              { incorrectLetter: key, count: 1 },
            ]);
          }
          setAnimationClass("animate__headShake");
          setTimeout(() => {
            setAnimationClass("");
          }, 300);
        }
      }
    }
  });

  useEventListener("keydown", ({ key }) => {
    if (key === "Shift") {
      setKeyboardMode("shift");
    }
  });

  useEventListener("keyup", ({ key }) => {
    if (key === "Shift") {
      setKeyboardMode("natural");
    }
  });

  useEffect(() => {
    if (!currentCard) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
    // setTimeout(() => {
    //   if (currentCard) {
    //     setIsCompleted(false);
    //   } else {
    //     setIsCompleted(true);
    //   }
    // }, 1500);
  }, [currentCard]);

  const navigate = useNavigate();

  const handleCardFinish = () => {
    addSetProgress
      .mutateAsync({
        body: {
          startDate: "2024-01-10T10:18:37.000+00:00",
          endDate: "2024-01-10T10:18:37.000+00:00",
          studentId: loggedInUser?.[0]?.userId,
          deckId: deckId,
          setId: setId,
          isCompleted: true,
        },
      })
      .then((res) => {
        // refetchCard();
        // navigate(`/decks/${deckId}/sets/${setId}`);
        navigate(`/decks/${deckNo}/${deckId}/sets/${setNo}/${setId}`);
      });
  };

  return (
    <>
      <div className="flex flex-col element-center">
        <div className="flex w-full -ml-3 ">
          <Keyboard
            activeKey={currentKey}
            incorrectLetter={incorrectLetter}
            keyboardMode={keyboardMode}
          />
        </div>
      </div>

      {/* word finish modal */}
      <Dialog open={isCompleted} onOpenChange={setIsCompleted}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex items-center justify-center">
            <div className="p-2 text-center ">
              <p className="text-xl font-semibold">
                Set Successfully Completed!
              </p>
              <p className="mt-4">
                Congratulations! Your set has been completed successfully.
              </p>
              <div className="element-center mt-5 ">
                <Button onClick={handleCardFinish}>Ok</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default VirtualKeyboard;
