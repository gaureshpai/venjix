import VideoContainer from "@/components/VideoContainer";
import IntroductionComponent from "@/components/IntroductionComponent";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <VideoContainer />
      <IntroductionComponent/>
    </main>
  );
}