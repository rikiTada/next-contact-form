"use client";

import ContactForm from "@/components/contact-form";
import Loading from "@/components/layout/loading";
import { useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="bg-muted/30">
      <ContactForm setIsLoading={setIsLoading} />
      <Loading isLoading={isLoading} />
    </div>
  );
}
