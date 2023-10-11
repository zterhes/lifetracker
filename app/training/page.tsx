import { ButtomNav } from "@/components/nav/ButtomNav";
import React from "react";
import { homeMenuButton, foodMenuButton } from "@/components/nav/buttonTypes";

export default function Training() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      training
      <ButtomNav buttonDataList={[homeMenuButton, foodMenuButton]} />
    </main>
  );
}
