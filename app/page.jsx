import StyleGuide from "@/components/StyleGuide";
import Hero from "../components/Hero";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Reservation from "../components/Reservation";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      {/* <StyleGuide /> */}
      <Header />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <div className="h-[1800px]"></div>
    </main>
  );
}
