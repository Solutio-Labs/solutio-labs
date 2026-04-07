import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malaka Project | Menuju Masyarakat Baru",
  description:
    "Gerakan edukasi digital, media literasi, dan pembangunan Masyarakat Baru.",
  icons: { icon: "/malaka-logo.png" },
};

export default function MalakaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
