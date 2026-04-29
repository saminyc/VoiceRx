import { Navbar } from "@/components/navbar";
import AboutPage from "./about/page"
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <AboutPage/>
      </div>
      <footer className="py-12 px-6 border-t bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-slate-900 tracking-tight">VoiceRx</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">
            © 2026 VoiceRx. Educational purposes only.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm font-semibold text-slate-400 hover:text-slate-600">Privacy</Link>
            <Link href="#" className="text-sm font-semibold text-slate-400 hover:text-slate-600">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
