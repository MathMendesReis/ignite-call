import { CardPage } from "@/components/ui/card-page";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CardPage>{children}</CardPage>;
}
