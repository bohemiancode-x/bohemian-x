import { baseMetadata } from "@/utils/base-metadata";
import ContactMain from "./contact-main";
import { Metadata } from "next";

export const metadata: Metadata = baseMetadata({
  title: "Contact - Emmanuel",
  description: "Get in touch with Emmanuel",
  slug: "/contact",
});

export default function Contact() {
  return <ContactMain />;
}
