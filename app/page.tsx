import { Navbar } from "@/components/navbar";
import AboutPage from "./about/page"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
        <AboutPage/>
    </main>
  );
}
