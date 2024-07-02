import SoopChat from "@/component/SoopChat";
import TwitchLive from "@/component/TwitchLive";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <div className="h-full w-5/6">
        <TwitchLive />
      </div>
      <div className="h-full w-1/6">
        <SoopChat />
      </div>
    </main>
  );
}
