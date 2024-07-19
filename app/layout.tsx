import MainHeader from "@/components/Landing/Header/MainHeader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/Landing/main.scss";
import FooterMain from "@/components/Landing/Footer/FooterMain";
import { StoreProvider } from "@/store/StoreProvider";
import TanStackProvider from "@/providers/TanStackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    absolute: "sema velesik",
    template: "%s | sema velesik",
  },
  description: "site by sema velesik",
  applicationName: "sema velesik",
  authors: [
    {
      name: "sema velesik",
      url: "http://localhost:3000",
    },
  ],
  publisher: "sema velesik",
  icons: {
    // короткий путь до иконки shortcut: '',
    // обычный путь до иконки icon: '',
    // какая иконка будет у приложения в apple(PWA) apple: ''
  },
  // разметка для соц.сетей
  openGraph: {
    title: "sema velesik",
    description: "site by sema velesik",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "site by sema velesik",
    title: "sema velesik",
    description: "site by sema velesik",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <TanStackProvider>{children}</TanStackProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
