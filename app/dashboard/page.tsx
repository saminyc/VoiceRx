import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import VoiceAssistant from "@/components/voice-assistant";
import { Pill, Mic, Activity } from "lucide-react";

const Dashboard = async () => {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    return (
        <div className="min-h-screen bg-slate-50/50">
            <main className="container mx-auto px-6 py-12 md:px-12">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                            <Pill size={24} />
                        </div>
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
                            Your Personal Voice Pharmacist
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-slate-600">
                            Get instant, reliable answers to your medication questions. 
                            Just click below and start speaking naturally.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="col-span-1 md:col-span-2">
                            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md md:p-12">
                                <div className="flex flex-col items-center justify-center text-center">
                                    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-8 ring-blue-50/50">
                                        <Mic size={40} />
                                    </div>
                                    <h2 className="mb-2 text-2xl font-semibold text-slate-900">Ready to Help</h2>
                                    <p className="mb-10 text-slate-500">
                                        Ask about dosages, side effects, or drug interactions.
                                    </p>
                                    <VoiceAssistant />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-4 flex items-center gap-3 text-blue-600">
                                    <Activity size={20} />
                                    <h3 className="font-semibold text-slate-900">Health Safety</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    VoiceRx provides general information only. Always consult with a healthcare professional for specific medical advice.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-blue-600 p-6 text-white shadow-sm">
                                <h3 className="mb-2 font-semibold">Need help?</h3>
                                <p className="mb-4 text-sm text-blue-100 leading-relaxed">
                                    Our team is here to support you with any technical issues.
                                </p>
                                <a 
                                    href="/contact" 
                                    className="inline-flex text-sm font-medium underline underline-offset-4 hover:text-white/80"
                                >
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Dosage Info", desc: "How much and when to take your meds." },
                            { title: "Interactions", desc: "Check if meds can be taken together." },
                            { title: "Side Effects", desc: "Know what to expect from your treatment." }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col rounded-xl border border-slate-100 bg-white p-6 transition-colors hover:bg-slate-50">
                                <h4 className="mb-1 font-semibold text-slate-900">{item.title}</h4>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;