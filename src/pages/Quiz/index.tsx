import Page from "@/components/custom/Page";
import { FaHome } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import Book from "@/assets/images/Book.png";
import { FaMedal } from "react-icons/fa";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { IoLogoGameControllerB } from "react-icons/io";
import { BsCollectionFill } from "react-icons/bs";

const Quiz = () => {
  return (
    <>
      <Page
        title="Quiz"
        breadcrumbs={[
          {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
          },
          {
            name: "Collections",
            path: "/collections",
            icon: <MdCollections />,
          },
          {
            name: "Decks",
            // path: "/assignedCollection",
            icon: <BsCollectionFill />,
          },
          {
            name: "Play game",
            path: "/quiz",
            icon: <IoLogoGameControllerB />,
          },
        ]}
      >
        <div className=" md:w-[80%] w-[100%] mx-auto">
          <div className="flex justify-center items-start  w-[100%] ">
            {" "}
            <div className="w-[100%] flex justify-center items-start ">
              <img
                src={Book}
                alt="dummImg"
                className=" md:w-40 md:h-28  w-14 h-14  object-contain  "
              />

              <div className="flex mr-2 w-full flex-col ">
                <div className="gap-x-5 w-full flex">
                  <Progress value={100} className="mt-8" />
                  <Progress value={100} className="mt-8" />
                  <Progress value={0} className="mt-8  bg-gray-400" />
                  <Progress value={0} className="mt-8 bg-gray-400" />
                  <Progress value={0} className="mt-8  bg-gray-400" />
                  <Progress value={0} className="mt-8  bg-gray-400" />
                </div>
                <div className="flex justify-between items-center  mt-5 w-[100%]">
                  <p className=" md:text-xl text-sm">Word Quiz</p>

                  <div className="flex  gap-5 items-center">
                    <div>
                      <FaMedal />
                    </div>

                    <div>0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[80%] w-[100%] xl:w-[75%] mx-auto lg:mt-0 mt-10   ">
            <div className="flex justify-center relative bg-[#E6FFDB] rounded-xl">
              <div className=" text-center p-1  lg:p-10 sm:p-8 rounded-lg ">
                <p className="absolute lg:-top-7 sm:-top-8 -top-7   items-center  sm:left-[47%] left-[45%] sm:p-3 p-1 rounded-3xl bg-white w-fit ring-offset-2 ring-2 text-[#38731F] font-semibold ">
                  18
                </p>
                <p className="text-[#38731F] font-semibold">Question 1/10</p>
                <p className="font-semibold">
                  Select the correct meaning for the given word
                </p>
              </div>
            </div>
            <div>
              <div className="text-center text-2xl mt-5 font-semibold mb-5">
                <p>ਸੇਬ</p>
              </div>
              <RadioGroup defaultValue="option-one">
                <div className="md:flex justify-evenly gap-[10px]">
                  <div className="lg:w-[35%]   ">
                    <div className="flex items-center space-x-5 justify-between mb-5  border border-[#38731F] p-3 rounded-lg">
                      <Label htmlFor="option-one">pineapple</Label>

                      <RadioGroupItem value="Orange" id="Orange" />
                    </div>
                    <div className="flex items-center space-x-5 justify-between border border-[#38731F] p-3 rounded-lg">
                      <Label htmlFor="option-one">mango</Label>

                      <RadioGroupItem value="apple" id="apple" />
                    </div>
                  </div>
                  <div className=" lg:w-[35%]  mt-5 md:mt-0  ">
                    <div className="flex items-center space-x-5 mb-5 justify-between  border border-[#38731F] p-3 rounded-lg">
                      <Label htmlFor="pine">Banana</Label>

                      <RadioGroupItem
                        value="pineapple and fruits"
                        id="pineapple and fruits"
                      />
                    </div>
                    <div className="flex items-center space-x-5 justify-between border border-[#38731F] p-3 rounded-lg">
                      <Label htmlFor="option-one">kiwi</Label>

                      <RadioGroupItem value="blue" id="blue" />
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-end gap-5 mt-10">
              <Button className="bg-white border border-[#38731F] text-black">
                Skip
              </Button>
              <Button className="text-black">Submit</Button>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default Quiz;
