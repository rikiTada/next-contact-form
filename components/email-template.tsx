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
  Hr,
} from "@react-email/components";
import { MessageSquareMore, SquareArrowOutUpRight } from "lucide-react";
import * as React from "react";

const url = "next-contact-form-red.vercel.app";
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${url}` : "";

export const EmailTemplate: React.FC<Readonly<FormData>> = ({
  name,
  email,
  body,
}) => {
  const previewText = `${name}さん お問い合わせを受け付けました。`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Tailwind>
        <Body className="bg-zinc-100 my-auto mx-auto font-sans px-2 [font-size:62.5%]">
          <Container className="border border-solid bg-white border-zinc-200 rounded-md my-10 mx-auto p-5 max-w-[465px]">
            {/* Service Logo */}
            {/* <Section>
              <Img src={`${baseUrl}/`} width="96" height="30" alt="Logo" />
            </Section> */}

            <Section className="my-8">
              <Heading className="text-zinc-800 text-center text-8 text-2xl font-medium">
                お問い合わせが完了しました。
              </Heading>
            </Section>

            <Section className="flex justify-center my-8">
              <Img
                className="rounded-full border border-zinc-200"
                src={`${baseUrl}/icon/animal_hiyoko.png`}
                max-width="96"
                height="96"
                alt="user"
              />
            </Section>

            <Section className="my-8">
              <Text className="text-zinc-800 text-center text-sm whitespace-pre">
                <strong>{name}</strong> 様 <br />
                この度は、お問い合わせありがとうございます！
              </Text>
            </Section>

            <Section className="my-8 text-zinc-600 px-6 py-2 bg-zinc-100 rounded flex justify-center">
              <Text className="text-[0.75rem]  w-full flex gap-2 justify-center items-center ">
                <span className=" border-b">お問い合わせ内容</span>
                <MessageSquareMore size={16} className="" />
              </Text>
              <Text className="text-lg text-center">{body}</Text>
            </Section>

            <Section className="my-8">
              <Text className="text-zinc-800 text-center text-sm whitespace-pre">
                お問い合わせいただいた内容について、 <br />
                {email} 宛に、 近日中お返事をさせていただきます。
              </Text>

              <Text className="text-zinc-500 text-center text-xs text-[1em] whitespace-pre">
                ※お問い合わせいただいた内容によっては、返信に数日かかる場合もございます。
              </Text>
            </Section>

            <Hr className="border border-solid border-zinc-200 my-7 mx-0 w-full" />

            <Section className="text-center my-8 flex justify-center ">
              <Button
                className="bg-zinc-800 rounded text-white text-sm font-semibold no-underline text-center px-5 py-3"
                href={`${baseUrl}`}
              >
                <div className="flex items-center gap-2">
                  トップページに戻る
                  <SquareArrowOutUpRight size={14} />
                </div>
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
