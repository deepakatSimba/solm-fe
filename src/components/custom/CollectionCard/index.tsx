import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import deckImage from "@/assets/images/business-colleagues-banner.png";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

export function CollectionCard({ item, deckNo }: any) {
  const navigate = useNavigate();

  return (
    <Card className="relative p-5 " key={item?.id}>
       
      <div className="flex gap-4">
        {/* <div>
          <img src={deckImage} alt="dummImg" />
        </div> */}
        <div className="py-2">
          <div className=" items-center flex text-base md:text-lg font-semibold capitalize">
            {item?.DeckDetails?.name}
          </div>
          {/* <div className="flex items-center gap-1 text-[#4E4E4E] text-base">
            <span>
              <FaUserTie />
            </span>
            {item?.assignByDetails?.name}
          </div> */}
        </div>
      </div>

      <div className="text-[#4E4E4E] text-base font-medium mt-2">
        Overall progress
      </div>

      <div className="flex justify-between items-center gap-5">
        <Progress
          value={item?.percentageCompleted && item?.percentageCompleted}
        />
        <Button variant={"default"} onClick={() => navigate(`${deckNo}/${item?.deckId}`)}>
          Resume
        </Button>
      </div>
    </Card>
  );
}
