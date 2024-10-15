import StyleGuide from "@/components/StyleGuide";
import Hero from "../components/Hero";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      {/* <StyleGuide /> */}
      <Header />
      <Hero />
      <Menu />
      <div className="h-[1800px]"></div>
    </main>
  );
}
