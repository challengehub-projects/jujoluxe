import { motion } from "framer-motion";
import WhatsAppFloat from "./whatsaappfloat";

export default function About() {
  return (
    <section className="bg-black text-white py-28 px-6">
  <div className="max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-light tracking-[6px]">
        ABOUT JUJOLUXE
      </h2>
      <p className="text-white/60 mt-4 max-w-2xl mx-auto">
        A luxury fragrance house dedicated to crafting timeless scents that define elegance, emotion, and presence.
      </p>
    </div>

    {/* HERO IMAGE */}
    <motion.img
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
      className="w-full h-[420px] object-cover rounded-2xl mb-16"
    />

    {/* DESCRIPTION */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-light mb-4">
          Our Essence
        </h3>

        <p className="text-white/60 leading-relaxed">
     JUJOLUXE is a modern perfume house creating signature fragrances inspired by elegance, emotion, and timeless luxury. Each scent is carefully crafted to express individuality, confidence, and unforgettable presence — turning every moment into a lasting fragrance memory.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg"
          className="rounded-2xl h-[320px] w-full object-cover"
        />
      </motion.div>

    </div>

    {/* FEATURES */}
    <div className="text-center mb-14">
      <h3 className="text-3xl font-light tracking-wide">
        Why JUJOLUXE Fragrances
      </h3>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* FEATURE 1 */}
      <motion.div
        initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        className="p-6 rounded-2xl bg-white/5 border border-white/10"
      >
        <h4 className="text-lg font-light mb-2 text-[#d4af37]">
          Signature Scents
        </h4>
        <p className="text-white/60 text-sm">
          Carefully blended fragrances designed to express elegance, mood, and identity.
        </p>
      </motion.div>

      {/* FEATURE 2 */}
      <motion.div
        initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="p-6 rounded-2xl bg-white/5 border border-white/10"
      >
        <h4 className="text-lg font-light mb-2 text-[#d4af37]">
          Long-Lasting Perfumes
        </h4>
        <p className="text-white/60 text-sm">
          Rich, high-quality notes that stay with you from day to night.
        </p>
      </motion.div>

      {/* FEATURE 3 */}
      <motion.div
        initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.4 }}
        className="p-6 rounded-2xl bg-white/5 border border-white/10"
      >
        <h4 className="text-lg font-light mb-2 text-[#d4af37]">
          Luxury Experience
        </h4>
        <p className="text-white/60 text-sm">
          Every bottle is designed to deliver a premium fragrance experience with elegance and class.
        </p>
      </motion.div>

    </div>

    {/* FINAL BANNER */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mt-20 text-center p-10 rounded-2xl bg-white/5 border border-white/10"
    >
      <h3 className="text-2xl font-light mb-3">
        Experience Luxury Through Scent
      </h3>
      <p className="text-white/60">
        Every fragrance is crafted to leave a lasting impression of elegance, beauty, and confidence.
      </p>
    </motion.div>

  </div>

  <WhatsAppFloat />
</section>
  );
}
