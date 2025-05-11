import Hero from "./_component/Hero";
import Service from "./_component/Service";
import Skill from "./_component/Skill";
import Card from "./_component/Card";
import Contect from "./_component/Contect";

export default function Home() {
  return (
    <div className="bg-[#171717]  p-5 md:p-10 px-16">
      <Hero />
      <Service />
      <Skill />
      <Card />
      <Contect />
    </div>
  );
}
