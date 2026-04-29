import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    WarningCircle,
    CheckCircle,
    ShieldCheck,
    Microphone,
    Code,
} from "@phosphor-icons/react/dist/ssr";

const AboutPage = async () => {
    return (
        <main className="min-h-screen bg-[#FAFBFF]">
            <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-28">
                {/* Background Decor */}
                <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2 overflow-hidden">
                    <div className="absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[-5%] h-[30%] w-[30%] rounded-full bg-indigo-50/50 blur-[100px]" />
                </div>

                {/* Hero Section */}
                <section className="mb-24 space-y-8 text-center">
                    <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600">
                        Intelligence in Voice
                    </div>

                    <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-7xl">
                        The future of{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              medication guidance
            </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-500 md:text-xl">
                        VoiceRx transforms complex pharmacy data into natural conversations.
                        Ask anything about your meds, and listen to clear, safe, and
                        simplified answers.
                    </p>
                </section>

                {/* Features Grid */}
                <div className="mb-28 grid gap-6 md:grid-cols-3">
                    <Card className="border border-slate-100 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <CardHeader className="pb-4">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">
                                <WarningCircle
                                    size={28}
                                    weight="duotone"
                                    className="text-amber-500"
                                />
                            </div>
                            <CardTitle className="text-xl font-bold">The Problem</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium leading-relaxed text-slate-500">
                                Pharmacy leaflets are dense and confusing. Online searches lead
                                to anxiety. Getting a quick, clear answer shouldn&apos;t be hard.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-100 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <CardHeader className="pb-4">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                                <CheckCircle
                                    size={28}
                                    weight="duotone"
                                    className="text-emerald-500"
                                />
                            </div>
                            <CardTitle className="text-xl font-bold">The Solution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium leading-relaxed text-slate-500">
                                Natural voice interaction. Just ask “What does this do?” or “Can
                                I take this with coffee?” and get an immediate verbal response.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border border-slate-100 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <CardHeader className="pb-4">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                                <ShieldCheck
                                    size={28}
                                    weight="duotone"
                                    className="text-blue-500"
                                />
                            </div>
                            <CardTitle className="text-xl font-bold">Safety First</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium leading-relaxed text-slate-500">
                                VoiceRx is educational, not diagnostic. Our AI is tuned for
                                pharmacy accuracy while emphasizing professional medical advice.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Story Section */}
                <div className="mb-28 grid items-center gap-16 md:grid-cols-2">
                    <section className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                            <Microphone size={16} weight="fill" />
                            <span>Empowering Patients</span>
                        </div>

                        <h2 className="text-4xl font-bold leading-tight text-slate-900">
                            Health accessibility <br />
                            <span className="font-medium italic text-slate-400">
                starts with communication.
              </span>
                        </h2>

                        <p className="text-lg font-medium leading-relaxed text-slate-500">
                            I built VoiceRx to break down the barriers of health literacy. By
                            using cutting-edge Voice AI, we&apos;re making sure everyone has access
                            to easy-to-understand medication information, regardless of their
                            technical or medical background.
                        </p>
                    </section>

                    <Card className="group overflow-hidden border-none bg-slate-900 text-white shadow-2xl">
                        <CardHeader className="relative z-10 p-8 pb-4">
                            <div className="mb-2 flex items-center gap-2 text-blue-400">
                                <Code size={20} weight="bold" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Technology
                </span>
                            </div>

                            <CardTitle className="text-2xl font-bold">
                                Performance-First Stack
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="relative z-10 p-8 pt-0">
                            <p className="mb-8 font-medium text-slate-400">
                                Built with the same precision we apply to medical info. Secure,
                                fast, and scalable.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Next.js",
                                    "Vapi AI",
                                    "TypeScript",
                                    "Clerk",
                                    "Tailwind",
                                    "Shadcn",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-md"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;