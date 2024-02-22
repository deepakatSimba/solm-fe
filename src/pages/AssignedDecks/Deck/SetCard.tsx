import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import dummyImage from "@/assets/images/dummyImage.avif";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "./style.css";

export function SetCard({ item, setNo }: any) {
  const navigate = useNavigate();
  return (
    <Card className="px-2 border-black">
      <div className="flex justify-between px-2 mt-1">
        <h1 className=" font-semibold ">Set {setNo}</h1>
        <div className="text-gray-400 ">
          {item?.numberOfCards ? item?.numberOfCards : 0} cards
        </div>
      </div>
      <div className="flex gap-2 items-center mt-2">
        <div className="w-[110px]">
          <CircularProgressbarWithChildren
            value={item?.totalPercentage ? item?.totalPercentage : 100}
          >
            <img
              src={item?.media?.url ? item?.media?.url : dummyImage}
              alt="setImg"
              className="size-[80px] object-cover rounded-full p-1 overflow-hidden"
            />
          </CircularProgressbarWithChildren>
        </div>
        <div className="py-2 w-full">
          <div className="h-[80%]">
            <p className="xl:text-xl md:text-md w-[100%] ">{item?.word}</p>
            <p className="text-[#717070] text-base">{item?.description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end pb-2  ">
        <Button
          onClick={() => navigate(`sets/${setNo}/${item._id}`)}
          variant={"default"}
        >
          Resume
        </Button>
      </div>
    </Card>
  );
}
