import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useAddFeedback } from "@/hooks/feedbackModal/mutation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Rating from "@/components/custom/Rating";
import { useState } from "react";
import { useAtom } from "jotai";
import { activeCard, meUser } from "@/store";

const FormSchema = z.object({
  comment: z.string().min(1, {
    message: "Comment cannot be empty",
  }),
  identity: z.string().optional(),
  tags: z.string({
    required_error: "Please select an option",
  }),
});

export const FeedbackModal = ({ setIsFeedbackModal }: any) => {
  const [disableBtn, setDisableBtn] = useState<boolean>(false);
  const [loggedInUser] = useAtom(meUser);
  const [currentCard] = useAtom(activeCard);
  const [rating, setRating] = useState<number>(0);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const addFeedback = useAddFeedback();

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const bodyData = {
      createdBy: loggedInUser?.[0]?.userId,
      rating: rating,
      cardId: currentCard?._id,
      ...data,
    };
    addFeedback
      .mutateAsync({
        body: bodyData,
      })
      .then(() => {
        setIsFeedbackModal(false);
        setDisableBtn(true);
        form.reset();
      })
      .catch(() => {
        setIsFeedbackModal(false);
        form.reset();
      });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <div>
              {currentCard?.image && (
                <img
                  src={currentCard?.image && currentCard?.image}
                  alt="dummImg"
                  className="text-center m-auto size-20"
                />
              )}
              <div className="element-center mt-4">
                <Rating rating={rating} setRating={setRating} />
              </div>
            </div>

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write..."
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col md:flex-row gap-2 w-full mt-2">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="identity"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Identity</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex border border-primary rounded-sm p-3"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="anonymous" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Anonymous
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Tags</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="rounded-sm py-5">
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-none">
                          <SelectItem value="Positive-review">
                            Positive Review
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 sm:mt-5 mt-8  ">
              <Button
                variant="outline"
                onClick={() => setIsFeedbackModal(false)}
              >
                Cancel
              </Button>
              <Button disabled={disableBtn} type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};
