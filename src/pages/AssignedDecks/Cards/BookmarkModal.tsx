import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { queryProps } from "@/types";
import { useGetFolder } from "@/hooks/bookmark/query";
import { useAtom } from "jotai";
import { activeCard } from "@/store";
import { useAddBookmark } from "@/hooks/bookmark/mutation";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Name cannot be empty",
  }),
  folderName: z.string().min(2, {
    message: "This field is required.",
  }),
});

export const BookmarkModal = ({ setIsBookmarkPopover }: any) => {
  const [currentCard] = useAtom(activeCard);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });
  // GET api to get all folder's list
  const { data: foldersList }: queryProps = useGetFolder({});
  // POST api to add bookmark
  const addBookmark = useAddBookmark();

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    if (data) {
      addBookmark
        .mutateAsync({
          body: {
            cardId: currentCard?._id,
            folderId: data?.folderName,
          },
        })
        .then((res: any) => {
          if (res) {
            toast({
              description: "Bookmark Added",
              variant: "success",
            });
            setIsBookmarkPopover(false);
            form.reset();
          }
        })
        .catch(() => {
          toast({
            description: "Something went wrong",
          });
        });
    }
  };
  return (
    <>
      <div className="font-semibold">Bookmark</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div>Name</div>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="folderName"
              render={({ field }) => (
                <FormItem>
                  <div className="mt-2">Folder</div>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select folder" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {foldersList?.data
                        ? foldersList?.data.map((item: any) => (
                            <SelectItem value={item?._id}>
                              {item?.name}
                            </SelectItem>
                          ))
                        : null}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end gap-3 sm:mt-5 mt-8  ">
            <Button
              variant={"outline"}
              onClick={() => setIsBookmarkPopover(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </>
  );
};
