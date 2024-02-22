"use client";
import React from "react";

import { Button } from "@/components/ui/button";
// import { toast } from "@/components/ui/use-toast";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const EmailSent = () => {
  // const formSchema = z.object({
  //   email: z.string().min(2, {
  //     message: "Username must be at least 2 characters.",
  //   }),
  // });

  // const form = useForm<z.infer<typeof formSchema>>();
  // function onSubmit(data: z.infer<typeof formSchema>) {
  // toast({
  //   title: "You submitted the following values:",
  //   description: (
  //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //     </pre>
  //   ),
  // });
  // }
  return (
    <div className="h-screen font-sans  bg-gray-100 flex justify-center items-center w-full">
      <div className="w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] ">
        <div className=" flex flex-col  items-center  bg-white py-14 px-16 rounded-2xl">
          <span className="font-semibold text-xl my-2">
            Email has been sent!
          </span>
          <span className=" text-gray-700 text-[13px]  text-center">
            Please check your inbox and click <br /> on the received link to
            reset password
          </span>

          <div className="mt-4 w-full">
            <div className="flex justify-center ">
              <img
                alt="img"
                height={80}
                width={150}
                src={
                  "https://media.istockphoto.com/id/1314193433/vector/envelope-with-approved-document-email-confirmation-document-with-check-mark-in-open-letter.jpg?s=612x612&w=0&k=20&c=yWcI4GIf9brTe5RtCZNPjkKggd7bsDpBNcQfP6vTUtk="
                }
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                size="sm"
                className="mt-4 text-[16px] text-white  bg-[#0073ea]"
              >
                Login
              </Button>
            </div>
            <div className="mt-2 text-[12px] font-medium  flex justify-center">
              <span className="text-gray-600">Didn't recieve email?</span>
              <span className="text-[#0071eae6] ml-1">Resend</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
