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
  Column,
  Row,
  Hr,
} from "@react-email/components";
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
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>{name}</strong>さん、お問い合わせが<strong>完了</strong>
              しました。
            </Heading>

            <Text></Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {name}さん。この度は、お問い合わせありがとうございます！
            </Text>
            <Text>メールアドレス: {email}</Text>

            <Section>
              <Row>
                <Column align="right">
                  <Img
                    className="rounded-full"
                    src={`${baseUrl}/icon/admin.png`}
                    width="64"
                    height="64"
                  />
                </Column>
                <Column align="center">
                  <Img
                    src={`${baseUrl}/icon/vercel-arrow.png`}
                    width="12"
                    height="9"
                    alt="invited you to"
                  />
                </Column>
                <Column align="left">
                  <Img
                    className="rounded-full"
                    src={`${baseUrl}/icon/animal_hiyoko.png`}
                    width="64"
                    height="64"
                  />
                </Column>
              </Row>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Text className="text-lg text-[#484848] p-6 bg-[#f2f3f3] rounded">
              {body}
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={`${baseUrl}`}
              >
                トップページに戻る
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
