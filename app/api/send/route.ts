import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "riki <contact@app-devstack.com>",
      to: [body.email],
      subject: `${body.name}さん お問い合わせありがとうございます。`,
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
