import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me | Abdullah Butt",
  description:
    "Get in touch with Abdullah Butt for project collaborations or teaching opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
