import { ButtomNav } from "@/components/nav/ButtomNav";
import { homeMenuButton } from "@/components/nav/buttonTypes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
      <ButtomNav buttonDataList={[homeMenuButton]} />
    </html>
  );
}
