import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { OtpInput } from "@/components/ui/others/otp-inputs";

const VerifyOtp = () => {
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>();
  // function onSubmit(data: z.infer<typeof formSchema>) {
  //   // toast({
  //   //   title: "You submitted the following values:",
  //   //   description: (
  //   //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //   //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //   //     </pre>
  //   //   ),
  //   // });
  // }
  return (
    <div className="h-screen font-sans  bg-gray-100 flex justify-center items-center w-full">
      <div className="w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
        <div className=" flex flex-col  items-center  bg-white py-14 px-16 rounded-2xl">
          <div className="h-[80px] w-[150px]">
            <img
              alt="img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfjdCSV7GS-Vsm26Gr8zFl67kK_H1bguGQQ&usqp=CAU"
              }
            />
          </div>
          <span className="font-semibold text-xl my-2">Verify your email</span>
          <span className=" text-gray-700 text-[13px]  text-center">
            The verification code has been sent to your email.
          </span>
          <span className=" text-gray-700 text-[13px] text-center my-1">
            Please enter the code below
          </span>

          <div className="form mt-4 w-full">
            <Form {...form}>
              <form
                // onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input {...field} />
                        {/* <OtpInput
                          autoFocus
                          disabled={false}
                          isNumberInput
                          length={4}
                          onChangeOTP={(otp: any) => {
                            console.log("otp", otp);
                          }}
                        /> */}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <div className="flex justify-center">
              <Button
                type="submit"
                size="sm"
                className="mt-4 text-[16px] text-white  bg-[#0073ea]"
              >
                Submit
              </Button>
            </div>
            <div className="mt-2 text-[12px] font-medium  flex justify-center">
              <span className="text-gray-600">Didn't recieve email?</span>
              <span className="text-[#0071eae6]  ml-1">Resend</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
