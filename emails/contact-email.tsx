import { EmailTemplate } from "@/components/email-template";

const dummyProps = {
  name: "Jonh Doe",
  email: "aaa@aa.com",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus impedit accusantium laboriosam, tempora vel culpa, ipsa id incidunt nam repudiandae voluptate architecto rerum voluptatem? Delectus aperiam iste dicta reiciendis!",
};

export default function ContactEmail() {
  return <EmailTemplate {...dummyProps} />;
}
