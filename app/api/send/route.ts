import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "riki <onboarding@resend.dev>",
      to: [body.email],
      subject: "Hello world",
      react: EmailTemplate({
        name: body.name,
        email: body.email,
        body: body.body,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
