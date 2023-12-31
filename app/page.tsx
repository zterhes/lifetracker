import { ButtomNav } from "@/components/nav/ButtomNav";
import {
  foodMenuButton,
  trainingMenuButton,
} from "@/components/nav/buttonTypes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome
      <ButtomNav buttonDataList={[foodMenuButton, trainingMenuButton]} />
    </main>
  );
}
