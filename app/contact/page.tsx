"use client";

import { useState } from "react";

const ContactPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        });

        if (res.ok) {
            alert("Message sent!");
            setForm({ name: "", email: "", phone: "", message: "" });
        } else {
            alert("Something went wrong");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white p-8 rounded-2xl shadow space-y-4"
            >
                <h1 className="text-2xl font-bold">Let’s Connect!</h1>

                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <input
                    name="phone"
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <textarea
                    name="message"
                    placeholder="Description"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                    required
                />

                <button className="w-full bg-black text-white p-3 rounded">
                    Submit
                </button>
            </form>
        </main>
    );
};

export default ContactPage;