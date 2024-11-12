import ContactForm from "@/components/contact/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
};
export default function Contact() {
  return (
    <main className="bg-zinc-100">
      <ContactForm />
    </main>
  );
}
