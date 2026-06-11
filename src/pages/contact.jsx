import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import WhatsAppFloat from "./whatsaappfloat";

export default function Contact() {
  const [message, setMessage] = useState("");

  const phoneNumber = "2347078917208";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message || "Hello JJL_SCENTS 👋. I would love to purchase a lovely perfume. I'm looking for something long-lasting, luxurious, and capable of leaving a memorable impression. Please send me your best recommendations, available sizes, and prices. Thank you.."
  )}`;

  return (
    <section className="bg-black text-white py-32 px-6 relative overflow-hidden">

      {/* 🌟 BEAUTY AURA BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        {/* floating gold glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-[#d4af37]/20 blur-[160px] top-0 left-0 rounded-full"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
        />

        {/* floating white silk glow */}
        <motion.div
          className="absolute w-[700px] h-[700px] bg-white/10 blur-[180px] bottom-0 right-0 rounded-full"
          animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        {/* tiny beauty sparkles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute top-1/3 left-20 w-1 h-1 bg-[#d4af37] rounded-full animate-pulse" />
          <div className="absolute bottom-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wide">
            JJL_SCENTS
          </h2>

          <p className="text-white/60 mt-5 max-w-2xl mx-auto leading-relaxed">
            Experience beauty, fragrance & elegance in a new way — talk directly with your luxury brand assistant.
          </p>

          {/* BADGES */}
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <span className="px-4 py-1 text-xs border border-white/10 rounded-full bg-white/5">
              Fast Response
            </span>
            <span className="px-4 py-1 text-xs border border-white/10 rounded-full bg-white/5">
              Luxury Service
            </span>
            <span className="px-4 py-1 text-xs border border-white/10 rounded-full bg-white/5">
              24/7 Orders
            </span>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT EXPERIENCE PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
              className="h-[560px] w-full object-cover scale-110"
            />

            {/* gradient luxury overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            {/* floating label */}
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-light">
                Beauty Meets Luxury
              </h3>
              <p className="text-white/70 text-sm mt-1">
                Your personal fragrance & beauty concierge
              </p>
            </div>

            {/* floating micro glow */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 bg-[#d4af37]/30 blur-2xl rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>

          {/* RIGHT FORM PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-2xl shadow-[0_0_100px_rgba(212,175,55,0.08)]"
          >

            <h3 className="text-xl font-light mb-6">
              Tell Us What You Want
            </h3>

            <textarea
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Example: I want luxury perfume, skincare set, or beauty products..."
              className="w-full p-5 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-white/40 outline-none focus:border-[#d4af37] transition"
            />

            {/* MAIN CTA */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              whileHover={{ scale: 1.03 }}
              className="mt-6 inline-flex items-center justify-center w-full gap-3 px-6 py-3 rounded-full bg-[#d4af37] text-black font-medium shadow-lg"
            >
              <FaWhatsapp />
              Send Luxury Request
            </motion.a>

            {/* SOCIAL ROW */}
            <div className="flex justify-center gap-7 mt-10 text-white/60">

              <FaInstagram className="text-xl hover:text-[#d4af37] transition cursor-pointer" />
              <FaFacebook className="text-xl hover:text-[#d4af37] transition cursor-pointer" />
              <FaTwitter className="text-xl hover:text-[#d4af37] transition cursor-pointer" />

            </div>

            <p className="text-center text-white/40 text-sm mt-6">
              Luxury replies within hours — always personal, always elegant.
            </p>

          </motion.div>
        </div>

        {/* BEAUTY FEATURES SECTION */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">

          {[
            {
              title: "Luxury Fragrance Service",
              desc: "Personal scent recommendations tailored to your style and mood.",
            },
            {
              title: "Beauty Concierge",
              desc: "Get curated skincare, beauty & lifestyle product guidance.",
            },
            {
              title: "VIP Ordering",
              desc: "Fast, private ordering with premium customer experience.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <h4 className="text-lg font-light mb-2">{item.title}</h4>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>

      <WhatsAppFloat />
    </section>
  );
}