import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sponsors from "@/components/sponsors";
import News from "@/components/news";
import Games from "@/components/games";
import History from "@/components/history";
import Footer from "@/components/footer";
import JoinFamily from "@/components/joinfamily";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <Games />
      <News />
      <History />
      <JoinFamily />
      <Footer />
    </>
  );
}
