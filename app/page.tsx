import Image from "next/image";
import Welcome from "../components/Welcome";
import Slider from "../components/Slider";
import Guide from "../components/Guide.jsx";
import Features from "../components/Features";
import Get from "../components/Get.jsx";
export default function Home() {
  return (
    <div className="max-container  min-h-screen  ">
      <Welcome />
      <Slider />
      <Guide />
      <Features />
      <Get />
    </div>
  );
}
