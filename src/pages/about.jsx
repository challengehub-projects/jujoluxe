import { motion } from "framer-motion";
import WhatsAppFloat from "./whatsaappfloat";

export default function About() {
  return (
    <section className="bg-black text-white py-32 px-6 relative overflow-hidden">

      {/* 🌟 FLOATING LUXURY AURA */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-[#d4af37]/20 blur-[160px] top-[-100px] left-[-100px] rounded-full"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-[700px] h-[700px] bg-white/10 blur-[180px] bottom-[-150px] right-[-150px] rounded-full"
          animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-[10px]">
            ABOUT JUJO'LE LUXE_SCENTS
          </h2>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
            A luxury fragrance house where emotion, identity, and elegance are
            transformed into unforgettable scent experiences.
          </p>
        </motion.div>

        {/* HERO IMAGE (CINEMATIC) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative mb-24 rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
            className="w-full h-[460px] object-cover scale-110"
          />

          {/* LUXURY OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

          {/* FLOATING LABEL */}
          <div className="absolute bottom-10 left-10">
            <h3 className="text-2xl font-light tracking-wide">
              Where Scent Becomes Identity
            </h3>
            <p className="text-white/70 text-sm mt-1">
              Crafted for presence, elegance & emotion
            </p>
          </div>
        </motion.div>

        {/* STORY SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-light mb-4">
              Our Essence
            </h3>

            <p className="text-white/60 leading-relaxed">
              JUJO'LE LUXE_SCENTS is a modern luxury perfume house dedicated to
              creating signature fragrances inspired by elegance, confidence,
              and timeless beauty. Every scent is carefully composed to reflect
              individuality — turning simple moments into lasting impressions.
            </p>

            <p className="text-white/60 mt-4 leading-relaxed">
              We believe fragrance is not just worn — it is experienced, remembered,
              and felt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg"
              className="rounded-3xl h-[360px] w-full object-cover"
            />

            {/* soft glow */}
            <div className="absolute -inset-4 bg-[#d4af37]/10 blur-2xl rounded-3xl" />
          </motion.div>
        </div>

        {/* FEATURES TITLE */}
        <div className="text-center mb-14">
          <h3 className="text-3xl font-light tracking-wide">
            Why Choose JUJO'LE LUXE_SCENTS
          </h3>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Signature Craft",
              desc: "Unique blends designed to reflect elegance, identity, and emotion.",
            },
            {
              title: "Lasting Impression",
              desc: "High-quality fragrances that stay with you from morning to night.",
            },
            {
              title: "Luxury Experience",
              desc: "Every bottle is crafted to feel premium, personal, and unforgettable.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <h4 className="text-lg font-light mb-2 text-[#d4af37]">
                {item.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* FINAL LUXURY BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-24 text-center p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#d4af37]/10 blur-2xl" />

          <h3 className="text-2xl font-light mb-3 relative">
            Experience Luxury Through Scent
          </h3>

          <p className="text-white/60 relative">
            Every fragrance is crafted to leave a lasting impression of elegance,
            confidence, and beauty.
          </p>
        </motion.div>

      </div>

      <WhatsAppFloat />
    </section>
  );
}