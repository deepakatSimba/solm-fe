import { Card } from "@/components/ui/card";
import dummyImage from "@/assets/images/dummyImage.avif";

export function CardList({ item }: any) {
  return (
    <Card className="px-2 border-2">
      <div>
        <div className="flex justify-start items-center p-4 gap-3">
          <div
            className={`border-4 ${
              item?.isCompleted ? "border-primary" : "border-gray-300"
            } p-1 rounded-full overflow-hidden`}
          >
            <img
              src={item?.image ? item?.image : dummyImage}
              alt="img"
              className="rounded-full object-cover size-[75px] border border-gray-300"
            />
          </div>
          <div className="ml-5">
            <div className="text-xl mb-1">{`"${item?.word?.punjabi}"`}</div>
            <div className="text-secondary font-medium capitalize">
              {item?.word?.id}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
