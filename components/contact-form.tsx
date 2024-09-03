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
import { InputField } from "./input-field";

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

  const inputFieldSet = [
    {
      label: "お名前",
      name: "name",
      type: "text",
      placeholder: "例)  山田 太郎",
    },
    {
      label: "メールアドレス",
      name: "email",
      type: "email",
      placeholder: "例)  example@example.com",
    },
    {
      label: "お問い合わせ内容",
      name: "body",
      type: "text",
      placeholder: "入力してください",
      variant: "textarea",
    },
  ];

  return (
    <div className="w-3/4 md:w-1/2 my-16 grid gap-8 py-8 container bg-card border border-zinc-400/50 rounded-md">
      <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {inputFieldSet.map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              variant={field.variant}
            />
          ))}
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
