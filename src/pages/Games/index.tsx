import Page from "@/components/custom/Page";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaHome } from "react-icons/fa";
import Book from "@/assets/images/Book.png";
import { IoLogoGameControllerB } from "react-icons/io";
import iphonebg from "@/assets/images/iphonebg.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Games = () => {

  return (
    <>
      <Page
        title="Assigned Decks"
        breadcrumbs={[
          {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
          },
          {
            name: "Play game",
            path: "/games",
            icon: <IoLogoGameControllerB />,
          },
        ]}
      >
        <div className="tabs mt-5">
          <Tabs defaultValue="play game">
            <TabsList className="grid w-full xl:w-1/2 grid-cols-3 bg-transparent">
              <TabsTrigger
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
                value="play game"
              >
                Play games
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
                value="Rewards"
              >
                Rewards
              </TabsTrigger>
            </TabsList>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 gap-28">
              <>
                <div
                  className="mt-10 p-5  boer  sm:h-[155px]  "
                  style={{
                    backgroundImage: `url(${iphonebg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="text-center">
                    <img
                      src={Book}
                      alt="dummImg"
                      className=" sm:w-20  w-[29%]  text-center mx-auto sm:-mt-16 -mt-10"
                    />
                    <div>
                      <p className="font-semibold mt-5 sm:text-2xl text-sm">
                        Word Quiz
                      </p>
                    </div>

                    <Dialog>
                      <DialogTrigger>
                        <Button className="sm:mt-5 w-[50px] h-[20px] lg:w-[80px] lg:h-[34px]">
                          Play
                        </Button>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-center  ">
                            Word Quiz{" "}
                          </DialogTitle>
                          <img
                            src={Book}
                            alt="dummImg"
                            className=" w-40  h-28 object-contain   mx-auto  "
                          />
                          <div></div>
                          <DialogDescription>
                            <div className="bg-green-100 p-3 rounded-xl mt-5 mb-3 text-black">
                              <p className="font-semibold ">Instructions</p>
                              <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Quis debitis fuga sit quae quo
                                dolorem nobis, ad culpa odit? Magnam veritatis,
                                eum nulla eius sunt itaque! Eaque, mollitia
                                ducimus.
                              </p>
                            </div>

                            <p className="font-bold text-black">
                              Choose difficulty level
                            </p>
                            <div className="flex justify-start gap-5 mt-3">
                              <Button>Easy</Button>
                              <Button className="bg-blue-200 text-blue-600">
                                Medium
                              </Button>
                              <Button className="bg-red-200 text-red-600">
                                Hard
                              </Button>
                            </div>
                            <div className="flex justify-end mt-5">
                              <Button
                                variant={"default"}
                                // onClick={() => {
                                //   navigate(`quiz`);
                                // }}
                              >
                                Start Game
                              </Button>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </>
            </div>
          </Tabs>
        </div>
      </Page>
    </>
  );
};

export default Games;
