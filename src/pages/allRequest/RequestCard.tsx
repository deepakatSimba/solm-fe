import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import mail from "@/assets/images/mail.png";
import deleteImg from "@/assets/images/delete.png";
import man from "@/assets/images/man.png";
import location from "@/assets/images/location.png";
import functionImg from "@/assets/images/function.png";
import poland from "@/assets/images/polandFlag.png";

export function RequestCard({ setIsOpen }: any) {
  return (
    <Card className="rounded-lg cardGradient">
      <div className="p-2.5 flex gap-3 w-full">
        <div className="w-[8%] min-h-[129px] flex flex-col justify-between">
          <div className="flex justify-end">
            <Badge
              variant="outline"
              className="text-primary shadow-md bg-white text-sm"
            >
              Id: 1291
            </Badge>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <img src={mail} alt="mail" />
            <img src={deleteImg} alt="mail" />
          </div>
        </div>
        <div className="w-[35%] px-1">
          <h3 className="font-medium text-base pb-3">
            Associate Product Manager - Medical Supplies
          </h3>
          <h3 className="font-normal pb-3">Type: New Head Count</h3>
          <h3 className="font-medium flex gap-3">
            <img src={man} alt="img" />
            Josie Tang
          </h3>
        </div>
        <div className="w-[43%] px-1 my-auto border-red-500">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="text-sm border-[#79747E] flex gap-2 p-1 px-2 w-[125px] justify-center"
              >
                <span>
                  <img src={location} alt="img" />
                </span>
                Location
              </Badge>
              <div className="flex gap-3 items-center">
                Poland
                <img src={poland} alt="img" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="text-sm border-[#79747E] flex gap-2 p-1 px-2 w-[125px] justify-center "
              >
                Region
              </Badge>
              <div className="flex">Headquarter</div>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="text-sm border-[#79747E] flex gap-2 p-1 px-2 w-[125px] justify-center"
              >
                <span>
                  <img src={functionImg} alt="img" />
                </span>
                Function
              </Badge>
              <div className="flex gap-3 items-center">GM Office</div>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="text-sm border-[#79747E] flex gap-2 p-1 px-2 w-[125px] justify-center"
              >
                Company Code
              </Badge>
              <div className="flex">SMSW</div>
            </div>
          </div>
          <div className="flex gap-2 justify-end text-xs mt-3">
            <span>Last Update : 21-10-2024</span>
            <span>Submission: 21-10-2024</span>
          </div>
        </div>
        <div className="w-[14%] flex flex-col justify-between mr-7">
          <div className="flex gap-2 items-center justify-end">
            Status
            <Badge className="bg-[#FAE3AC54] text-[#E5A70C] border border-[#E5A70C] text-sm">
              Pending
            </Badge>
          </div>
          <div className="flex justify-end">
            <Badge
              variant="outline"
              className="text-primary shadow-md bg-white text-sm py-1.5 hover:bg-[#f3f1f1] cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Progress
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
