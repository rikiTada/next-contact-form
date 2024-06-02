"use client";

import { FormData, formSchema } from "@/schema/schema";

export const sendEmail = async (data: FormData) => {
  const reslut = formSchema.safeParse(data);

  if (!reslut.success) {
    return { error: reslut.error };
  }

  const result = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!result.ok) {
    return { error: result.statusText };
  }
};
