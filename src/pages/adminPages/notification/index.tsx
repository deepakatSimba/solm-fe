import Page from "@/components/custom/Page";
import { FaHome } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const FormSchema = z.object({
  selectedNotification: z.string({
    required_error: "Please select an field to display.",
  }),
  role: z.enum(["student", "creator", "instructor"], {
    required_error: "You need to select a role.",
  }),
});
const Notification = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Data submitted", data);
    form.reset();
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <>
      <Page
        title="Notification"
        breadcrumbs={[
          {
            name: "Home",
            path: "/dashboard",
            icon: <FaHome />,
          },
          {
            name: "Notification",
            path: "/notification",
            icon: <MdCollections />,
          },
        ]}
      >
        <div className="w-11/12 mx-auto mt-3 lg:mt-5 flex gap-2 flex-col flex-wrap justify-center sm:justify-start">
          <div className="flex">
            <Card className="flex px-5 py-3">
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
                        <FormLabel>Notification</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a verified email to display" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
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
                    name="role"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-black text-[16px]">
                          Role
                        </FormLabel>
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
                              <FormLabel className="font-normal">
                                Instructor
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="student" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Student
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Send</Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </Page>
    </>
  );
};

export default Notification;
