import { motion } from "framer-motion";
import WhatsAppFloat from "./whatsappfloat";

export default function About() {
  return (
    <section className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light tracking-[6px]">
            ABOUT PEACELUXE
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            A luxury digital experience built for fashion, beauty, and lifestyle shopping.
          </p>
        </div>

        {/* HERO IMAGE */}
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="https://images.pexels.com/photos/32616678/pexels-photo-32616678.jpeg"
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
              Who We Are
            </h3>

            <p className="text-white/60 leading-relaxed">
              PEACELUXE is a premium lifestyle brand focused on delivering elegance
              through fashion, beauty, and self-care products. From luxury bags,
              footwear, and vintage wears to skincare, haircare, and natural oils —
              everything is carefully curated for quality and class.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.pexels.com/photos/3927390/pexels-photo-3927390.jpeg"
              className="rounded-2xl h-[320px] w-full object-cover"
            />
          </motion.div>

        </div>

        {/* WEBSITE FEATURES */}
        <div className="text-center mb-14">
          <h3 className="text-3xl font-light tracking-wide">
            Website Features
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
              Luxury Collections
            </h4>
            <p className="text-white/60 text-sm">
              Explore fashion, beauty, skincare, and lifestyle products in one place.
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
              WhatsApp Ordering
            </h4>
            <p className="text-white/60 text-sm">
              Place orders instantly via WhatsApp with direct messaging support.
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
              Nationwide Delivery
            </h4>
            <p className="text-white/60 text-sm">
              Fast and reliable delivery across all regions in the country.
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
            Experience Luxury the PEACELUXE Way
          </h3>
          <p className="text-white/60">
            Every product is curated with elegance, quality, and timeless style.
          </p>
        </motion.div>

      </div>

      <WhatsAppFloat />
    </section>
  );
}