import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { useLoginUser } from "@/hooks/auth/mutation";
import { toast } from "@/components/ui/use-toast";
import { BtnLoader } from "@/components/custom/Spin";
import logo from "@/assets/images/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Please enter a valid email address."),
  // .refine(async (e) => {
  //   const emails = await fetchEmails();
  //   return emails.includes(e);
  // }, "This email is not in our database"),
  password: z.string().min(6, {
    message: "Password must be of 6 characters.",
  }),
});

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Login Api
  const loginUser = useLoginUser();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data) {
      loginUser
        .mutateAsync({ body: data })
        .then((res: any) => {
          if (res?.accessToken) {
            localStorage.setItem("authorization", res?.accessToken);
            window.location.replace("/");
          }
        })
        ?.catch((err: any) => {
          if (err?.response?.data?.message) {
            toast({
              description: "Incorrect email/password",
              variant: "destructive",
            });
          } else {
            toast({
              description: "Something went wrong! Try again later.",
              variant: "destructive",
            });
          }
        });
    }
  }
  return (
    <>
      <div className="h-screen font-sans bg-[#F2F4FA] flex flex-col justify-center items-center w-full relative">
        <div className="absolute top-5 left-5">
          <img src={logo} alt="eye_vocab_logo" width={90} />
        </div>
        <div className="w-full max-w-[400px] border-2 border-primary rounded-md py-3 px-5">
          <div className="items-center py-6 px-4">
            <h1 className="font-semibold text-3xl flex justify-center mb-10">
              Login
            </h1>
            <div className="form w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className="text-base lg:text-lg">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="xyz@gmail.com"
                            {...field}
                            className="text-base border-[#989898]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base lg:text-lg">
                          Password
                        </FormLabel>
                        <div className="relative ">
                          <FormControl>
                            <Input
                              type={!isPasswordVisible ? "password" : "text"}
                              placeholder="********"
                              {...field}
                              className="text-base border-[#989898]"
                            />
                          </FormControl>
                          <div className=" absolute right-2 top-2  ">
                            {isPasswordVisible ? (
                              <FaEye
                                className="text-xl text-black "
                                onClick={() =>
                                  setIsPasswordVisible(!isPasswordVisible)
                                }
                              />
                            ) : (
                              <FaEyeSlash
                                className="text-xl text-black "
                                onClick={() =>
                                  setIsPasswordVisible(!isPasswordVisible)
                                }
                              />
                            )}
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className=" mt-96 ">
                    <span
                      className=" text-[#0071eae6] font-semibold cursor-pointer"
                      onClick={() => navigate(`/forgot`)}
                    >
                      Forgot Password?
                    </span>
                  </div>

                  <Button
                    type="submit"
                    className=" w-full text-white text-xl bg-[#38731F] mt-10 items-center"
                    disabled={loginUser.isPending}
                  >
                    {loginUser.isPending && <BtnLoader />}
                    Login
                  </Button>
                </form>
              </Form>
            </div>
            {/* <div>
            <div className="mt-2 text-[15px] font-medium  flex justify-center">
              <span className="text-gray-600">Didn't have an account?</span>
              <span className="text-[#0071eae6]  ml-1">Sign Up</span>
            </div>
            <div>
              <div className="flex justify-center">
                <span className="text-gray-400 font-[500] text-[15px] my-2">
                  -OR-
                </span>
              </div>
              <div className="border border-gray-500 p-2  rounded-lg gap-4  flex justify-center items-center  w-full">
                <span> </span>
                <span className="text-gray-400 text-xs font-semibold">
                  Sign up with Google
                </span>
              </div>
            </div>
            </div> */}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Login;
