import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen items-center p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm">
        <p>?</p>
        <p>??</p>
        <p>???</p>
      </div>
    </main>
  );
}
