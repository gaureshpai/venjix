import VideoContainer from "@/components/VideoContainer";
import IntroductionComponent from "@/components/IntroductionComponent";
import EditorProfileComponent from "@/components/EditorProfileComponent";
import ServicesComponent from "@/components/ServicesComponent";
import RecentWorkComponent from "@/components/RecentWorkComponent";
import HomeStudio from "@/components/HomeStudio";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <VideoContainer />
      <IntroductionComponent/>
      <EditorProfileComponent/>
      <ServicesComponent/>
      <RecentWorkComponent/>
      <HomeStudio />
    </main>
  );
}