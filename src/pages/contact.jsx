import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import WhatsAppFloat from "./whatsaappfloat";

export default function Contact() {
    const [message, setMessage] = useState("");

    const phoneNumber = "2347078910740"; // 🔥 replace with your WhatsApp number

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message || "Hello PEACELUXE, I want to make an order."
    )}`;

    return (
        <section className="bg-black text-white py-28 px-6">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light tracking-wide">
                        Connect With PEACELUXE
                    </h2>
                    <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                        Luxury fashion, beauty & lifestyle — reach out directly via WhatsApp or social media.
                    </p>
                </div>

                {/* MAIN GRID */}
                <div className="grid md:grid-cols-2 gap-14 items-center">

                    {/* LEFT - MOOD IMAGES */}
                    {/* LEFT - CONTACT IMAGE */}
                    <div className="relative">

                        <motion.img
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1 }}
                            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                            className="rounded-2xl h-[520px] w-full object-cover"
                        />

                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

                        {/* TEXT OVER IMAGE */}
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-white text-xl font-light tracking-wide">
                                Let’s Connect
                            </h3>
                            <p className="text-white/70 text-sm">
                                Message us directly via WhatsApp anytime
                            </p>
                        </div>

                    </div>

                    {/* RIGHT - FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
                    >

                        <h3 className="text-xl font-light mb-6">
                            Send us a message
                        </h3>

                        {/* INPUT */}
                        <textarea
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write your message... (e.g I want skincare products, bags, etc)"
                            className="w-full p-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-[#d4af37] outline-none"
                        />

                        {/* BUTTON */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            className="mt-6 inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-full bg-[#d4af37] text-black font-medium hover:scale-105 transition"
                        >
                            <FaWhatsapp />
                            Send via WhatsApp
                        </a>

                        {/* SOCIALS */}
                        <div className="flex justify-center gap-6 mt-8 text-white/60">

                            <a href="https://instagram.com" target="_blank">
                                <FaInstagram className="text-xl hover:text-[#d4af37] transition" />
                            </a>

                            <a href="https://facebook.com" target="_blank">
                                <FaFacebook className="text-xl hover:text-[#d4af37] transition" />
                            </a>

                            <a href="https://twitter.com" target="_blank">
                                <FaTwitter className="text-xl hover:text-[#d4af37] transition" />
                            </a>

                        </div>

                        <p className="text-center text-white/40 text-sm mt-6">
                            We usually reply within a few hours.
                        </p>

                    </motion.div>

                </div>
            </div>

            <WhatsAppFloat />
        </section>
    );
}