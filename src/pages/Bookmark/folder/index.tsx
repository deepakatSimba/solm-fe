import { Input } from "@/components/ui/input";
import { CiFolderOn } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IoAddSharp, IoEye } from "react-icons/io5";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useAddFolder, useDeleteFolder } from "@/hooks/bookmark/mutation";
import { toast } from "@/components/ui/use-toast";
import { useGetFolder } from "@/hooks/bookmark/query";
import { AiOutlineDelete } from "react-icons/ai";
import { queryProps } from "@/types";
import { useState } from "react";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Folder name cannot be empty",
  }),
});

const CreateFolder = ({ isOpen, setIsOpen, setSingleFolderId, refetchTableData }: any) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  // POST api to add folder
  const addFolder = useAddFolder();

  // GET api to get all folder's list
  const { data: foldersList, refetch: refetchFolder }: queryProps =
    useGetFolder({});

  // DELETE api to delete folder
  const deleteFolder = useDeleteFolder();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data) {
      addFolder
        .mutateAsync({
          body: { name: data?.name },
        })
        .then((res: any) => {
          if (res) {
            toast({
              description: res?.message,
              variant: "success",
            });
            form.reset();
            refetchFolder();
          }
        })
        .catch(() => {
          toast({
            description: "Something went wrong",
          });
        });
    }
  }

  function handleFolderDelete(id: any) {
    if (id) {
      deleteFolder
        .mutateAsync({
          pathParams: { folderId: id },
        })
        .then((res: any) => {
          if (res) {
            toast({
              description: res?.message,
              variant: "destructive",
            });
            refetchFolder();
            refetchTableData();
          }
        })
        .catch(() => {
          toast({
            description: "Something went wrong",
            variant: "destructive",
          });
        });
    }
  }

  return (
    <>
      <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Folders</SheetTitle>
          </SheetHeader>

          <div className="mt-4 flex items-center gap-3">
            <Button
              className="bg-[#7C9075]"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <IoAddSharp />
            </Button>
            <span>New Folder</span>
          </div>

          <div className="mt-4">
            {showDropdown && (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex items-center gap-3">
                            <div className=" text-4xl text-white bg-[#7C9075] rounded-lg p-2">
                              <CiFolderOn />
                            </div>
                            <Input placeholder="New folder name" {...field} />
                          </div>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-2 items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setShowDropdown(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button size="sm" type="submit">
                      Save
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </div>

          <div>
            <h2 className="font-semibold mt-5">Folders List:</h2>

            <ul className="flex flex-col">
              {foldersList?.data
                ? foldersList?.data.map((item: any) => (
                    <li
                      className="border rounded-sm mt-2 py-2 px-2 hover:bg-green-50 hover:border flex items-center justify-between"
                      key={item?._id}
                    >
                      <div>{item?.name}</div>
                      <div className="flex gap-2 cursor-pointer">
                        <span onClick={() => setSingleFolderId(item?._id)} className="hover:text-primary">
                          <IoEye />
                        </span>
                        <span onClick={() => handleFolderDelete(item?._id)} className="hover:text-red-500">
                          <AiOutlineDelete />
                        </span>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CreateFolder;
