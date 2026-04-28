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
        <main className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
                {/* Hero Section */}
                <section className="mb-20 space-y-6 text-center">
                    <div className="inline-flex items-center rounded-full bg-black px-4 py-1.5 text-xs font-bold text-white uppercase tracking-widest">
                        VoiceRx
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-3xl mx-auto leading-[1.1]">
                        Your voice-powered <span className="text-blue-600">AI pharmacist</span> assistant
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-600">
                        VoiceRx simplifies medication information through natural voice interaction, 
                        providing safety-focused explanations you can understand.
                    </p>
                </section>

                <div className="grid gap-8 md:grid-cols-3 mb-20">
                    <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <WarningCircle size={32} weight="duotone" className="text-amber-500 mb-2" />
                            <CardTitle className="text-xl">The Problem</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 leading-relaxed">
                                Online medication information is often fragmented, overly technical, and 
                                difficult to verify when you need a quick answer.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <CheckCircle size={32} weight="duotone" className="text-emerald-500 mb-2" />
                            <CardTitle className="text-xl">The Solution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 leading-relaxed">
                                Ask questions naturally using your voice. Receive clear, conversational, 
                                and simplified responses in real-time.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                            <ShieldCheck size={32} weight="duotone" className="text-blue-500 mb-2" />
                            <CardTitle className="text-xl">Safety First</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600 leading-relaxed">
                                Built with strict guardrails to avoid diagnosis. We focus on general 
                                education and always recommend consulting a professional.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-12 md:grid-cols-2 mb-20">
                    <section className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold tracking-tight uppercase text-sm">
                            <Microphone size={20} weight="fill" />
                            <span>Why VoiceRx?</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Bridging the gap in health accessibility
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            I built VoiceRx to explore how voice AI can make complex health information 
                            accessible to everyone. By combining natural language processing with 
                            safety-first medical knowledge, we reduce the barrier to understanding 
                            your medications.
                        </p>
                    </section>

                    <Card className="border-none bg-slate-900 text-white p-2">
                        <CardHeader>
                            <div className="flex items-center gap-2 text-slate-400 mb-2">
                                <Code size={20} />
                                <span className="text-sm font-medium uppercase tracking-wider">Tech Stack</span>
                            </div>
                            <CardTitle className="text-2xl text-white">Built with modern tools</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {["Next.js", "TypeScript", "Clerk", "Vapi AI", "shadcn/ui", "Tailwind CSS"].map(
                                    (tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-slate-100 backdrop-blur-sm"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* CTA Section - "Ask Voice" Focus */}
                <section className="relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-12 text-center text-white shadow-2xl">
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Ready to try VoiceRx?
                        </h2>
                        <p className="mx-auto max-w-xl text-blue-100 text-lg">
                            Experience the future of medication guidance. Ask your first question now 
                            using just your voice.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            {userId ? (
                                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 h-14 px-8 text-lg font-bold rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95">
                                    <Link href="/dashboard" className="flex items-center gap-2">
                                        Ask VoiceRx <ArrowRight weight="bold" />
                                    </Link>
                                </Button>
                            ) : (
                                <>
                                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-100 h-14 px-8 text-lg font-bold rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95">
                                        <Link href="/sign-up">Get Started</Link>
                                    </Button>
                                    <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 h-14 px-8 text-lg font-medium">
                                        <Link href="/sign-in">Sign In</Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-black/10 blur-3xl"></div>
                </section>
            </div>
        </main>
    );
};

export default AboutPage;