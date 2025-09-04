import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";
import Experience from '@/components/Experience';
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex flex-col mx-auto 
                 sm:px-10 px-5 overflow-x-hidden 2xl:px-20"
    >
      
      <div className="w-full max-w-[1440px] mx-auto">
        <FloatingNav navItems={navItems} />
        <Hero /> 
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
