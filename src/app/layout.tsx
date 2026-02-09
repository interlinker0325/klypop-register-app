import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "KLYPOP — Commande et paie tes plats en 3 messages",
  description:
    "Un chatbot intelligent pour commander tes plats préférés, payer en ligne et récupérer au restaurant. Simple, rapide, sans friction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white antialiased">
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
