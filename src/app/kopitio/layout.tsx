import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kopitio Coffee Shop",
  description: "Awali harimu dengan secangkir Kopitio.",
  icons: {
    icon: "/kopitio.jpeg",
  },
};

export default function KopitioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
