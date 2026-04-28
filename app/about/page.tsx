import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    WarningCircle, 
    CheckCircle, 
    ShieldCheck, 
    Microphone, 
    Code,
    ArrowRight
} from "@phosphor-icons/react/dist/ssr";

const AboutPage = async () => {
    const { userId } = await auth();

    return (
        <main className="min-h-screen bg-[#FAFBFF]">
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-28 relative">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-indigo-50/50 blur-[100px]" />
                </div>

                {/* Hero Section */}
                <section className="mb-24 space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-600 uppercase tracking-widest">
                        Intelligence in Voice
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.05]">
                        The future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">medication guidance</span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                        VoiceRx transforms complex pharmacy data into natural conversations. 
                        Ask anything about your meds, and listen to clear, safe, and simplified answers.
                    </p>

                    <div className="pt-4">
                        {!userId && (
                            <Button asChild size="lg" className="rounded-full px-8 py-6 h-auto text-lg font-semibold bg-slate-900 hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-200">
                                <Link href="/sign-up">Get Started for Free</Link>
                            </Button>
                        )}
                    </div>
                </section>

                {/* Features Grid */}
                <div className="grid gap-6 md:grid-cols-3 mb-28">
                    <Card className="border border-slate-100 shadow-sm bg-white/70 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-4">
                                <WarningCircle size={28} weight="duotone" className="text-amber-500" />
                            </div>
                            <CardTitle className="text-xl font-bold">The Problem</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                Pharmacy leaflets are dense and confusing. Online searches lead to anxiety. 
                                Getting a quick, clear answer shouldn't be hard.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-100 shadow-sm bg-white/70 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4">
                                <CheckCircle size={28} weight="duotone" className="text-emerald-500" />
                            </div>
                            <CardTitle className="text-xl font-bold">The Solution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                Natural voice interaction. Just ask "What does this do?" or "Can I take this with coffee?" 
                                and get an immediate verbal response.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-100 shadow-sm bg-white/70 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                                <ShieldCheck size={28} weight="duotone" className="text-blue-500" />
                            </div>
                            <CardTitle className="text-xl font-bold">Safety First</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                VoiceRx is educational, not diagnostic. Our AI is tuned for pharmacy accuracy 
                                while emphasizing professional medical advice.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Story Section */}
                <div className="grid gap-16 md:grid-cols-2 mb-28 items-center">
                    <section className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-wider">
                            <Microphone size={16} weight="fill" />
                            <span>Empowering Patients</span>
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                            Health accessibility <br />
                            <span className="text-slate-400 font-medium italic">starts with communication.</span>
                        </h2>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium">
                            I built VoiceRx to break down the barriers of health literacy. 
                            By using cutting-edge Voice AI, we're making sure everyone has 
                            access to easy-to-understand medication information, regardless 
                            of their technical or medical background.
                        </p>
                        <div className="flex items-center gap-4 text-slate-400 font-medium pt-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />
                                ))}
                            </div>
                            <span className="text-sm">Trusted by health explorers</span>
                        </div>
                    </section>

                    <Card className="border-none bg-slate-900 text-white overflow-hidden shadow-2xl group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Code size={120} />
                        </div>
                        <CardHeader className="relative z-10 p-8 pb-4">
                            <div className="flex items-center gap-2 text-blue-400 mb-2">
                                <Code size={20} weight="bold" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Technology</span>
                            </div>
                            <CardTitle className="text-2xl font-bold">Performance-First Stack</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10 p-8 pt-0">
                            <p className="text-slate-400 mb-8 font-medium">
                                Built with the same precision we apply to medical info. 
                                Secure, fast, and scalable.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Next.js", "Vapi AI", "TypeScript", "Clerk", "Tailwind", "Shadcn"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* CTA Section */}
                <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-16 text-center text-white shadow-[0_20px_50px_rgba(59,130,246,0.3)]">
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            Start talking to <br className="sm:hidden" /> VoiceRx today.
                        </h2>
                        <p className="mx-auto max-w-xl text-blue-100/80 text-lg font-medium">
                            Join thousands who are making their health journey 
                            easier through voice intelligence.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                            {userId ? (
                                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 h-16 px-10 text-lg font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 group">
                                    <Link href="/dashboard" className="flex items-center gap-2">
                                        Open Dashboard 
                                        <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            ) : (
                                <>
                                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 h-16 px-10 text-lg font-bold rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
                                        <Link href="/sign-up">Get Started Now</Link>
                                    </Button>
                                    <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 h-16 px-8 text-lg font-semibold rounded-2xl transition-colors">
                                        <Link href="/sign-in">Already have an account?</Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                    {/* Decorative blobs */}
                    <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
                </section>
            </div>
        </main>
    );
};

export default AboutPage;