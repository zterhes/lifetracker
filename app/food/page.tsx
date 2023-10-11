import { ButtomNav } from "@/components/nav/ButtomNav";
import {
  homeMenuButton,
  trainingMenuButton,
} from "@/components/nav/buttonTypes";
import React from "react";

export default function Food() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      food
      <ButtomNav buttonDataList={[homeMenuButton, trainingMenuButton]} />
    </main>
  );
}
