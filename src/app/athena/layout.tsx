import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klinik Kecantikan Athena Official",
  description:
    "Secret of Goddess Beauty. Expert in Aesthetic & Beauty Treatment by dr. Richard Lee est. 2014.",
  icons: {
    icon: "/athena-logo.png",
  },
};

export default function AthenaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
