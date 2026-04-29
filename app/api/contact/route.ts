import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "sychowdhury2001@gmail.com", // 👈 change this
            subject: "VoiceRx User email",
            html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
}