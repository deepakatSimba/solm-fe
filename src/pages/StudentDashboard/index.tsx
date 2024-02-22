import Page from "@/components/custom/Page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FaHome } from "react-icons/fa";
import { ActivitesChart } from "./ActivitiesChart";
import hire from "@/assets/images/hire.png";
import chat from "@/assets/images/chat.png";

const StudentDashboard = () => {
  return (
    <>
      <Page
        title="Dashboard"
        breadcrumbs={[
          {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
          },
        ]}
      >
        <div className="mx-7">
          <h3 className="text-secondary text-[22px] font-semibold  leading-normal">
            New Approval Request
          </h3>
          <div className="flex gap-6">
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
              <Label htmlFor="email">Select a new request type</Label>
              <Input type="email" id="email" placeholder="New Headcount" />
              <div className="flex justify-end">
                <Button className="mt-1 rounded-none" size="sm">
                  Submit
                </Button>
              </div>
            </div>

            {arr.map((item) => (
              <Card className="cardGradient2">
                <div className="p-5 flex flex-col justify-center text-center items-center h-full max-w-[200px]">
                  <div className="font-semibold text-base">{item?.head1}</div>
                  <div className="font-medium text-2xl">{item?.head2}</div>
                </div>
              </Card>
            ))}
          </div>
          <div>
            <Separator className="my-6" />
          </div>

          <div className="flex">
            <div className="w-[55%] h-[380px] p-1 border-r-2 mr-5">
              <div className="font-semibold text-xl text-secondary mb-5">
                Overview of activities
              </div>
              <ActivitesChart data={data} />
            </div>
            <div className="w-[45%]">
              <div className="font-semibold text-xl text-secondary mb-5">
                January
              </div>
              <div className="flex gap-10 mb-5">
                <Card className="cardGradient w-[250px] flex items-center justify-between px-5">
                  <div className="p-4">
                    <h3 className="font-medium text-yellow-500 mb-1">New hiring</h3>
                    <img src={hire} alt="img" className="size-[56px]" />
                  </div>
                  <div className="text-3xl font-medium">04</div>
                </Card>
                <Card className="cardGradient w-[250px] flex items-center justify-between px-5">
                  <div className="p-4">
                    <h3 className="font-medium text-[#235D2A] mb-1">New Request</h3>
                    <img src={chat} alt="img" className="size-[56px]" />
                  </div>
                  <div className="text-3xl font-medium">04</div>
                </Card>
              </div>
              <div className="flex gap-10">
                <Card className="cardGradient w-[250px] flex items-center justify-between px-5">
                  <div className="p-4">
                    <h3 className="font-medium text-[#DD6731] mb-1">Pending Request</h3>
                    <img src={hire} alt="img" className="size-[56px]" />
                  </div>
                  <div className="text-3xl font-medium">04</div>
                </Card>
                <Card className="cardGradient w-[250px] flex items-center justify-between px-5">
                  <div className="p-4">
                    <h3 className="font-medium text-[#EE472D] mb-1">Rejected Request</h3>
                    <img src={chat} alt="img" className="size-[56px]" />
                  </div>
                  <div className="text-3xl font-medium">04</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default StudentDashboard;

const arr = [
  {
    head1: "Total New hiring",
    head2: "20",
  },
  {
    head1: "Total Request",
    head2: "30",
  },
  {
    head1: "Head Count",
    head2: "80",
  },
  {
    head1: "Avg Request Approval Time",
    head2: "4 days",
  },
  {
    head1: "Avg Hiring Time",
    head2: "2 weeks",
  },
];

const data = [
  {
    id: "10% Request",
    label: "10% Request",
    value: 241,
    color: "hsl(2, 70%, 50%)",
  },
  {
    id: "15% Hire",
    label: "15% Hire",
    value: 568,
    color: "hsl(44, 70%, 50%)",
  },
  {
    id: "20% Reject",
    label: "20% Reject",
    value: 233,
    color: "hsl(33, 70%, 50%)",
  },
  {
    id: "30% Pending",
    label: "30% Pending",
    value: 268,
    color: "hsl(84, 70%, 50%)",
  },
  {
    id: "25% Approve",
    label: "25% Approve",
    value: 98,
    color: "hsl(293, 70%, 50%)",
  },
];
