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
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>();
  function onSubmit() {
    console.log("done");
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  const navigate = useNavigate()
  return (
    <div className="h-screen font-sans  bg-gray-100 flex justify-center items-center w-full">
      <div className="w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[27%]">
        <div className=" flex flex-col  items-center  bg-white py-14 px-16 rounded-2xl">
          <span className="font-semibold text-xl my-2">
            Forgot your password?
          </span>
          <span className=" text-gray-700 text-[15px] text-center">
            Enter your registered email below <br /> to recieve password reset
            instructions.
          </span>

          <div className="form mt-4 w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="inputField bg-gray-100 text-[16px] text-gray-500"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <div className="mt-2 text-[15px] font-medium  flex justify-center">
              <span className="text-gray-600">Remember password?</span>
              <span className="text-[#0071eae6] ml-1" onClick={() => navigate('/auth/login')}>Login</span>
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                size="sm"
                className="mt-4 text-[16px] text-white  bg-[#0073ea]"
                onClick={() => navigate('/newPass')}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
