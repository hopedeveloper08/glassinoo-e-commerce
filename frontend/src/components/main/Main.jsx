import Banner from "./components/Banner";
import Slider from "./components/Slider";

export default function Main() {
  return <>
    <div className="hero w-full h-[calc(100vh-4.1rem)]">
      <Slider />
      <Banner />
    </div>
  </>
}
