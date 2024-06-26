"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/lib/action";
import { FormData, formSchema } from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ContactForm({
  setIsLoading,
}: {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      body: "",
    },
  });

  const { errors, isDirty, isValid } = form.formState;

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const result = await sendEmail(data);
    setIsLoading(false);

    if (result?.error) {
      toast.error("送信失敗", {
        description:
          "何らかの問題が発生しました。時間を置いてから、やり直してください。",
      });
    } else {
      toast.success("送信完了", {
        description: "お問い合わせを受け付けしました。",
      });

      setTimeout(() => {
        router.push("/contact/contact-complate");
      }, 1000);
    }
  };

  return (
    <div className="w-3/4 md:w-1/2 my-16 grid gap-8 py-8 container bg-card border border-zinc-400/50 rounded-md">
      <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary/70 text-[0.75em]">
                  お名前
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="例)  山田 太郎"
                    className="placeholder:text-muted-foreground/50"
                    {...field}
                  />
                </FormControl>
                {errors.name && (
                  <p className="text-red-500 text-[0.75rem] transition-all duration-100">
                    {errors.name.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary/70 text-[0.75em]">
                  メールアドレス
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="例)  example@example.com"
                    className="placeholder:text-muted-foreground/50"
                    {...field}
                  />
                </FormControl>
                {errors.email && (
                  <p className="text-red-500 text-[0.75rem] transition-all duration-100">
                    {errors.email.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          <FormField
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary/70 text-[0.75em]">
                  お問い合わせ内容
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="入力してください"
                    className="placeholder:text-muted-foreground/50"
                    rows={6}
                    {...field}
                  />
                </FormControl>
                {errors.body && (
                  <p className="text-red-500 text-[0.75rem] transition-all duration-100">
                    {errors.body.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          <div className="flex gap-4 my-4">
            <Button
              disabled={!isValid || !isDirty}
              type="submit"
              className="w-full"
            >
              送信
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
