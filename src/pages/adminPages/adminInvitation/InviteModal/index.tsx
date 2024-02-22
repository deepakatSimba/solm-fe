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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { useInviteCreator } from "@/hooks/creatorManagement/mutation";
import { useInviteInstructor } from "@/hooks/instructorManagement/mutate";
import { useInviteStudent } from "@/hooks/studentManagement/mutate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Please enter a valid email address."),
    role: z.enum(["student", "creator", "instructor"], {
    required_error: "Role is required",
  }),
});

export const InviteModal = ({ setIsOpenModal, refetch }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // POST API to invite CREATOR
  const inviteCreator = useInviteCreator();

  // POST API to invite INSTRUCTOR
  const inviteInstructor = useInviteInstructor();

  // POST API to invite STUDENT
  const inviteStudent = useInviteStudent();

  function onSubmit(data: z.infer<typeof formSchema>) {
    const body = {
      name: data?.name,
      email: data?.email.toLowerCase(),
      role: data?.role,
    };

    if (data?.role === "creator") {
      inviteCreator
        .mutateAsync({
          body: body,
        })
        .then((res: any) => {
          if (res?.success) {
            setIsOpenModal(false);
            toast({
              variant: "success",
              description: "Invitation sent successfully",
            });
          }
          refetch();
          form.reset();
        })
        .catch((err) => {
          if (err?.response?.status === 409) {
            toast({
              variant: "warn",
              description: err?.response?.data?.message,
              duration: 3000,
            });
          }
        });
    } else if (data?.role === "instructor") {
      inviteInstructor
        .mutateAsync({
          body: body,
        })
        .then((res: any) => {
          if (res?.success) {
            setIsOpenModal(false);
            toast({
              variant: "success",
              description: "Invitation sent successfully",
            });
          }
          refetch();
          form.reset();
        })
        .catch((err) => {
          if (err?.response?.status === 409) {
            toast({
              variant: "warn",
              description: err?.response?.data?.message,
              duration: 3000,
            });
          }
        });
    } else if (data?.role === "student") {
      inviteStudent
        .mutateAsync({
          body: body,
        })
        .then((res: any) => {
          if (res?.success) {
            setIsOpenModal(false);
            toast({
              variant: "success",
              description: "Invitation sent successfully",
            });
          }
          refetch();
          form.reset();
        })
        .catch((err) => {
          if (err?.response?.status === 409) {
            toast({
              variant: "warn",
              description: err?.response?.data?.message,
              duration: 3000,
            });
          }
        });
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-black text-[16px]">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter name..."
                    {...field}
                    className="inputField text-[16px] text-black border border-black "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-black text-[16px]">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="xyz@gmail.com"
                    {...field}
                    className="inputField text-[16px] text-black border border-black "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-black text-[16px]">Role</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="creator" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Content Creator
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="instructor" />
                      </FormControl>
                      <FormLabel className="font-normal">Instructor</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="student" />
                      </FormControl>
                      <FormLabel className="font-normal">Student</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
};
