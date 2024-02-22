import { Button } from "@/components/ui/button";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Key from "@/assets/images/Key.png";
import { Toaster } from "@/components/ui/toaster";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "@/assets/images/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";
import { useAcceptInvitation } from "@/hooks/auth/mutation";
import { BtnLoader } from "@/components/custom/Spin";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password must be of 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const NewPassword = () => {
  const [userData, setUserData] = useState<any>({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUserData(payload);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, [token]);

  // POST api to accept invitation
  const acceptInvitation = useAcceptInvitation();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data) {
      const body = {
        email: userData?.email,
        password: data?.password,
      };
      acceptInvitation
        .mutateAsync({
          query: {
            token: token,
          },
          body: body,
        })
        .then((res: any) => {
          if (res?.success) {
            toast({
              variant: "success",
              description: "Account created successfully",
            });
            navigate("/auth/login");
          }
        })
        .catch((err) => {
          if (err) {
            toast({
              variant: "destructive",
              description: "Something went wrong",
            });
            navigate("/auth/login");
          }
        });
    }
  }

  return (
    <>
      <div className="h-screen font-sans bg-[#F2F4FA] flex flex-col justify-center items-center w-full relative unselectable">
        <div className="absolute top-5 left-5">
          <img src={logo} alt="eye_vocab_logo" width={90} />
        </div>
        <div className="w-full max-w-[450px] border-2 rounded-md py-3 px-5 shadow-sm">
          <div className="items-center py-6 px-4">
            <div className="flex justify-center mb-2">
              <img src={Key} alt="img" width={60} />
            </div>
            <div className="text-xl md:text-2xl font-semibold mb-2 text-center">
              Choose a Password
            </div>
            <p className="text-center mb-4 md:mb-6 text-sm md:text-base">
              Must be atleast 8 characters.
            </p>
            <div className="form w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className="text-base lg:text-lg">
                          New Password
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
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base lg:text-lg">
                          Confirm Password
                        </FormLabel>
                        <div className="relative ">
                          <FormControl>
                            <Input
                              type={
                                !isConfirmPasswordVisible ? "password" : "text"
                              }
                              placeholder="********"
                              {...field}
                              className="text-base border-[#989898]"
                            />
                          </FormControl>
                          <div className=" absolute right-2 top-2  ">
                            {isConfirmPasswordVisible ? (
                              <FaEye
                                className="text-xl text-black "
                                onClick={() =>
                                  setIsConfirmPasswordVisible(
                                    !isConfirmPasswordVisible
                                  )
                                }
                              />
                            ) : (
                              <FaEyeSlash
                                className="text-xl text-black "
                                onClick={() =>
                                  setIsConfirmPasswordVisible(
                                    !isConfirmPasswordVisible
                                  )
                                }
                              />
                            )}
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className=" w-full text-white text-xl bg-[#38731F] mt-10 items-center"
                    disabled={acceptInvitation.isPending}
                  >
                    {acceptInvitation.isPending && <BtnLoader />}
                    Continue
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default NewPassword;
