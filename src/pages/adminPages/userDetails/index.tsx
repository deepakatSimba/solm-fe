import Page from "@/components/custom/Page";
import { FaAngleDown, FaHome } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import assetImage from "../../../assets/images/picture-orange-with-leaf-white-background 1.png";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useLocation } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const FormSchema = z.object({
  selectedNotification: z.string({
    required_error: "Please select an field to display.",
  }),
  disableDuration: z.enum(["8 Hours", "1 Week", "Always"], {
    required_error: "You need to select a time duration.",
  }),
});

const UserDetails = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Data submitted", data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  const location = useLocation();
  console.log("User Details", location.state);
  // const userDetails = location.state;
  return (
    <>
      <Page
        title="User Details"
        breadcrumbs={[
          {
            name: "Home",
            path: "/dashboard",
            icon: <FaHome />,
          },
          {
            name: "Manage Vocabulary",
            path: "/managevocabulary",
            icon: <MdCollections />,
          },
          {
            name: "User Details",
            path: "/userdetails",
            icon: <MdCollections />,
          },
        ]}
      >
        <div className="w-11/12 mx-auto mt-3 lg:mt-5 flex gap-2 flex-col flex-wrap justify-center sm:justify-start">
          <div className="flex md:flex-wrap flex-wrap-reverse justify-between gap-5">
            <Card className="flex px-5 py-2 flex-wrap justify-center">
              <img
                src="https://thumbs.dreamstime.com/b/young-handsome-businessman-working-office-young-handsome-businessman-working-office-209070634.jpg"
                alt="Image"
                className="w-[100px] h-[100px] rounded-full object-cover border-2"
              />
              <CardContent className="flex flex-col gap-2 justify-center">
                <h1>
                  <span className="font-semibold">Name:</span> Admin{" "}
                </h1>
                <p>
                  <span className="font-semibold">Email:</span> admin@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Role:</span> Admin
                </p>
              </CardContent>
            </Card>
            <Dialog>
              <DialogTrigger asChild className="outline-none text-md">
                <Button>Disable</Button>
              </DialogTrigger>

              <DialogContent>
                {/* <DialogHeader>
                  <DialogTitle>Dissable</DialogTitle>
                </DialogHeader> */}
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=" space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="selectedNotification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for Disable</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            // disabled
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a verified email to display" />
                                <FaAngleDown />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="overflow-hidden">
                              {/* <SelectItem value="Please maintain student accounts" onClick={()=>{
                                setSelectedArea(false);
                              }}>
                                Please maintain student accounts
                              </SelectItem> */}
                              <SelectItem value="Please maintain student accounts">
                                Please maintain student accounts
                              </SelectItem>
                              <SelectItem value="Share pending payments files">
                                Share pending payments files
                              </SelectItem>
                              <SelectItem value="Maintain accounts">
                                Maintain accounts
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="selectedNotification"
                      render={() => (
                        <FormItem>
                          <FormLabel className="flex justify-center">
                            OR
                          </FormLabel>

                          <Textarea
                            disabled
                            onChange={(e) => {
                              setSelectedValue(e.target.value);
                            }}
                            placeholder="Type your message here"
                            value={selectedValue}
                          ></Textarea>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="disableDuration"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-black text-[16px]">
                            Duration
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="8 Hours" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  8 Hours
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="1 Week" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  1 Week
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="Always" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Always
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-5 justify-end flex-wrap">
                      <Button type="submit">Send</Button>
                      <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                          <Button type="button" variant="outline">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
          <Separator />
          <h1 className="text-2xl font-bold font-serif text-slate-500 mt-2 mx-2">
            Uploaded Content
          </h1>
          <div className="flex gap-4 flex-wrap sm:justify-start justify-center ">
            <Card className="flex flex-wrap ">
              <img
                src={assetImage}
                width={100}
                className="object-contain mx-auto"
                alt="Image"
              />
              <CardContent className="flex flex-col justify-center gap-1">
                <div className="flex flex-col justify-center">
                  <h1 className="text-2xl font-bold text-[#38731F] pt-2">
                    ਸੰਤਰਾ
                  </h1>
                </div>
                <div>
                  <div className="flex text-[1rem] gap-1">
                    <h1 className="font-bold">Submission Date : </h1>
                    <p>18/01/2024</p>
                  </div>
                  <div className="flex text-[0.9rem] gap-1">
                    <h1 className="font-bold">Status : </h1>
                    <p>Pending</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Page>
    </>
  );
};

export default UserDetails;
