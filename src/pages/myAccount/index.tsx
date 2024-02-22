import Page from "@/components/custom/Page";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { format } from "date-fns";
import { SlCalender } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { useGetSingleUser } from "@/hooks/users/query";
import { useUpdateUser } from "@/hooks/users/mutate";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  email: z.string().optional(),

  name: z.string({
    required_error: "This field is required",
  }),

  number: z.string({
    required_error: "This field is required",
  }),

  address: z.string({
    required_error: "This field is required",
  }),

  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

const MyAccount = () => {

const{userId}=useParams();
console.log("userId",userId);

const {data:accountData}:any=useGetSingleUser({
  pathParams:{
    userId:userId,
  }
});

console.log('accountData :>> ', accountData);
let fetchedData=accountData?.data;
console.log('fetchedData :>> ', fetchedData?.email);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  useEffect(()=>{
    if(fetchedData){
      form.setValue("email",fetchedData.email);
      form.setValue("name",fetchedData.name);
      form.setValue("number",fetchedData?.phone?.number,);
      form.setValue("address",fetchedData.address);
      form.setValue("dob",new Date(fetchedData?.dob));
      // form.reset({
      //   email:fetchedData?.email,
      //   name:fetchedData?.name,
      //   number:fetchedData?.phone?.number,
      //   address:fetchedData?.address,
      //   dob: fetchedData?.dob ? new Date(fetchedData?.dob): undefined
      // })
    }
  },[fetchedData])
  const updateUser=useUpdateUser();
  function onSubmit(value: z.infer<typeof FormSchema>) {
    if(value){
      updateUser.mutateAsync({
        // pathParams,
        body:{
          email:value.email,
          name:value.name,
          phone:{
            number:value.number,
          },
          address:value.address,
          dob:value.dob,
        }
      }).then((res:any)=>{
        if(res.success){
          toast({
            duration: 2000,
            variant: "success",
            description: "User details updated successfully",
          });
        }
      }).catch((error:any)=>{
        console.log("error",error);
        toast({
          variant: "destructive",
          description: "User details does not updated",
        });
      })
    }
  }
  return (
    <>
      <Page title="Profile Details">
        <div className="w-full sm:w-11/12 mx-auto mt-3 lg:mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <div className="font-semibold text-sm">Email</div>
                      <FormControl>
                        <Input
                          placeholder="abc@gmail.com"
                          {...field}
                          disabled={true}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="font-semibold text-sm"> Name</div>
                      <FormControl>
                        <Input placeholder=" Name..." {...field} disabled={true}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-3">
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <div className="font-semibold text-sm">Date of Birth</div>
                      <Popover
                        open={isCalendarOpen}
                        onOpenChange={setIsCalendarOpen}
                      >
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full text-left font-normal border-gray-200 hover:bg-transparent",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <SlCalender className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(e) => {
                              field.onChange(e), setIsCalendarOpen(false);
                            }}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <div className="font-semibold text-sm">Phone</div>
                      <FormControl>
                        <div className="relative ">
                          <Label className="absolute top-[7px] left-2 text-base text-black">
                            {fetchedData?.phone?.countryNumber}
                          </Label>
                          <Input
                            className="pl-10 text-base text-black"
                            type="tel"
                            placeholder="contact no..."
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-3">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <div className="font-semibold text-sm">Address</div>
                      <FormControl>
                        <Textarea
                          placeholder=" Address"
                          {...field}
                          className="resize-none border-gray-200 focus-visible:ring-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="mt-5 text-end">
                  Update
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Page>
    </>
  );
};

export default MyAccount;
