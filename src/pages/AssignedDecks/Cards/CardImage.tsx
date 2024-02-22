import { Card } from "@/components/ui/card";
import dummyImage from "@/assets/images/dummyImage.avif";

export function CardImage({ image }: any) {
  return (
    <>
      <div className="w-full max-w-64 xl:max-w-72 mt-1 xl:-mt-5">
        <div className="p-1">
          <Card>
            <div className="flex aspect-auto items-center justify-center p-3 xl:p-4">
              <div>
                <img
                  src={image ? image : dummyImage}
                  alt="img"
                  className="w-40 xl:w-48 h-36 xl:h-40"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
