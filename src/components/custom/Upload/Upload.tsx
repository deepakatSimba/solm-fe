import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useUpload } from "@/hooks/upload/mutation";
import { useEffect } from "react";

export const Upload = ({ field, setUploadData, accept, setIsPending }: any) => {
  // POST API to upload image/audio
  const upload = useUpload();

  const handleUpload = (e: any) => {
    const formData = new FormData();

    if (e.target.files?.[0]) {
      const url = e.target.files?.[0];
      formData.append("media", url);

      upload
        .mutateAsync({
          body: formData,
        })
        .then((res: any) => {
          if (res?.success) {
            setUploadData(res?.data);
            toast({
              variant: "success",
              description: res?.message,
            });
          }
        })
        .catch((err) => {
          if (err) {
            toast({
              variant: "destructive",
              description: "Something went wrong",
            });
          }
        });
    }
  };
  useEffect(() => {
    setIsPending(upload.isPending);
  }, [upload.isPending]);

  return (
    <div>
      <Input type="file" accept={accept} {...field} onChange={handleUpload} />
    </div>
  );
};
