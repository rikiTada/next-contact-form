import { FormData } from "@/schema/schema";
import {
  Text,
  Button,
  Heading,
  Tailwind,
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const EmailTemplate: React.FC<Readonly<FormData>> = ({
  name,
  email,
  body,
}) => {
  const previewText = `Join ${name} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              {/* <Img
                src={`${baseUrl}/static/vercel-logo.png`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              /> */}
            </Section>
            <Heading>ようこそ, {name}さん！</Heading>

            <Text>お問い合わせありがとうございます！</Text>
            <Text>名前:{name}</Text>
            <Text>メールアドレス:{email}</Text>

            <Text>{body}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
