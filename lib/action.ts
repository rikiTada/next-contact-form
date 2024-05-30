"use client";

import { FormData, formSchema } from "@/schema/schema";

import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

export const sendEmail = async (data: FormData) => {
  const reslut = formSchema.safeParse(data);

  if (!reslut.success) {
    return { error: reslut.error };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const email = process.env.EMAIL_ADDRESS;

  const { error } = await resend.emails.send({
    from: `riki <${email}>`,
    to: [data.email],
    subject: "お問い合わせありがとうございます！",
    react: EmailTemplate(data),
    text: `ようこそ, {data.name}さん！`,
  });

  if (error) {
    return { error };
  }
};
