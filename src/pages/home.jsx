import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import WhatsAppFloat from "./whatsaappfloat";

function Home() {
  return (
    <div className="bg-black text-white relative overflow-hidden">

      {/* GLOBAL AMBIENT GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[450px] h-[450px] bg-[#d4af37]/20 blur-[140px] top-20 left-10 rounded-full"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-white/10 blur-[160px] bottom-10 right-10 rounded-full"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center relative text-center px-6 overflow-hidden">

        {/* BACKGROUND IMAGE WITH SLOW ZOOM */}
        <motion.div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: [1.05, 1.12] }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* DARK OVERLAY (SOFTER + MORE LUXURY) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        {/* HERO CONTENT */}
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >

          {/* TITLE FLOAT IMPROVED */}
          <motion.h1
            className="text-5xl md:text-6xl tracking-[10px] font-light"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            JUJO'LE LUXE_SCENTS
          </motion.h1>

          {/* TEXT */}
          <motion.p
            className="mt-6 text-white/70 leading-relaxed text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            A world of fragrance where every scent tells a story of elegance, emotion, and unforgettable presence.
          </motion.p>

          {/* BUTTON (MORE PREMIUM GLOW) */}
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(212,175,55,0.0)",
                  "0 0 30px rgba(212,175,55,0.35)",
                  "0 0 0px rgba(212,175,55,0.0)",
                ],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-8 px-9 py-3 rounded-full bg-white text-black font-semibold hover:bg-[#d4af37] transition shadow-lg"
            >
              DM to Order
            </motion.button>
          </a>

        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="collections" className="bg-black text-white py-24 px-0 md:px-6 relative">

        {/* subtle divider glow */}
        <div className="absolute top-0 left-1/2 w-[60%] h-[1px] bg-[#d4af37]/20 blur-sm -translate-x-1/2" />

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl font-light tracking-wide">
              JUJO'LE LUXE_SCENTS Collections
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Our collections are more than perfumes — they are emotions captured in scent.
              From soft florals to deep, bold notes, each fragrance tells its own story.
            </p>
          </div>

          {/* INNER SECTION */}
          <section className="bg-black text-white py-28 px-0 md:px-6">
            <div className="max-w-6xl mx-auto">

              {/* HEADER */}
              <div className="text-center mb-20 px-6">
                <h2 className="text-4xl font-light tracking-wide">
                  Our Collections
                </h2>
                <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                  Explore a curated collection of luxury perfumes designed to express elegance, emotion, and timeless sophistication.
                </p>
              </div>

              {/* CARDS */}
              <div className="flex flex-col gap-20">

                {[
                  {
                    title: "Signature Scents",
                    img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
                    desc: "Elegant signature perfumes crafted to define your presence and style.",
                  },
                  {
                    title: "Luxury Fragrances",
                    img: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg",
                    desc: "High-end perfumes designed with rich notes of sophistication and charm.",
                  },
                  {
                    title: "Floral Collection",
                    img: "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg",
                    desc: "Soft floral scents inspired by roses, jasmine, and natural beauty.",
                  },
                  {
                    title: "Woody & Musk",
                    img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
                    desc: "Deep, bold fragrances with warm woody and musky undertones.",
                  },
                  {
                    title: "Fresh & Clean",
                    img: "https://images.pexels.com/photos/6621461/pexels-photo-6621461.jpeg",
                    desc: "Light, refreshing perfumes perfect for daily elegance and simplicity.",
                  },
                  {
                    title: "Evening Luxury",
                    img: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg",
                    desc: "Bold evening scents made for unforgettable nights and presence.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      duration: 1.1,
                      ease: "easeOut",
                      delay: i * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.6)] border border-white/10"
                  >

                    {/* IMAGE */}
                    <img
                      src={item.img}
                      className="w-full h-[320px] md:h-[420px] object-cover transition duration-700 ease-in-out group-hover:scale-105"
                    />

                    {/* OVERLAY (MORE LUXURY GRADIENT) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* TEXT */}
                    <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-auto max-w-md">
                      <h3 className="text-2xl font-light mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed italic">
                        {item.desc}
                      </p>
                    </div>

                  </motion.div>
                ))}

              </div>
            </div>
          </section>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center px-6">

            {[
              {
                title: "Signature Fragrances",
                desc: "Discover exclusive perfumes crafted to express elegance, confidence, and individuality.",
              },
              {
                title: "Long-Lasting Scent",
                desc: "Our perfumes are designed with rich notes that stay with you throughout the day and night.",
              },
              {
                title: "Luxury Experience",
                desc: "Every bottle is crafted to deliver a premium fragrance experience that leaves a lasting impression.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <h4 className="text-lg font-light mb-3">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT (UNCHANGED — ONLY SLIGHT POLISH) */}
      <section id="contact" className="py-28 px-6 bg-black text-white relative overflow-hidden">

        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light tracking-wide">
              Connect With Us
            </h2>

            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Reach out anytime — your luxury experience starts with a message.
            </p>
          </motion.div>

          {/* unchanged contact icons */}
          <WhatsAppFloat />
        </div>

        {/* GLOW */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 blur-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      </section>

    </div>
  );
}

export default Home;