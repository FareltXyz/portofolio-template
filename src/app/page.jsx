import Image from "next/image";
import Navbar from "@/components/Navbar"
import Portofolio from "@/components/Portofolio";

export default function Home() {
  return (
    <>
     <Navbar menu1="Project" menu2="Suggest"/>
     <main className="flex flex-col items-center justify-between mt-14">
      <Portofolio />
     </main>
    </>
  );
}
