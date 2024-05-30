import { FormData } from "@/schema/schema";
import { Text, Button, Heading, Tailwind } from "@react-email/components";
import * as React from "react";

export const EmailTemplate: React.FC<Readonly<FormData>> = ({
  name,
  email,
  body,
}) => (
  <Tailwind>
    <Heading>ようこそ, {name}さん！</Heading>

    <Text>お問い合わせありがとうございます！</Text>
    <Text>名前:{name}</Text>
    <Text>メールアドレス:{email}</Text>

    <Text>{body}</Text>
  </Tailwind>
);
