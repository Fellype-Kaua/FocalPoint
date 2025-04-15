import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import ToDoList from "@/components/ToDoList/ToDoList";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ToDo App",
  description: "Gerencie suas tarefas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={interTight.variable}>
      <body className="font-sans">
        <Header userName="Fellype"/>
        <main>
          <ToDoList/>
          {children}</main>
      </body>
    </html>
  );
}
