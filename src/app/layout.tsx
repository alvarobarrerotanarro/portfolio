import type { Metadata } from "next";
import BackdropProvider from "@/app/contexts/backdrop-ctx";
import ClientContextProvider from "@/app/contexts/client-ctx";
import BodyWrapper from "@/app/components/body-wrapper"
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Álvaro Barrero Tanarro",
  description: "Portfolio, presentacion y curriculum para el desarrollador de software y aplicaciones autodidacata Álvaro Barrero Tanarro; con experiencia en numerosos entornos de programacion y tecnologias.",
  authors: [{ name: "Álvaro Barrero Tanarro", url: "https://github.com/alvarobarrerotanarro" }],
  creator: "Álvaro Barrero Tanarro",
  keywords: ["portfolio", "alvaro barrero tanarro", "alvaro", "barrero", "desarrollador", "github", "typescript", "javascript", "c", "c++", "cpp", "tecnologia", "informatica", "programador", "software", "desarrollo de software", "web", "desarrollo web", "aplicaciones", "desarrollo de aplicaciones", "bases de datos", "react", "nextjs", "nodejs", "cmake"],
  classification: "Portafolio de desarrollador de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BackdropProvider>
        <BodyWrapper>
          <ClientContextProvider>
            {children}
          </ClientContextProvider>
        </BodyWrapper>
      </BackdropProvider>
    </html>
  );
}

