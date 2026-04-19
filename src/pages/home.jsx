import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import WhatsAppFloat from "./whatsappfloat";


function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section
        className="h-screen flex items-center justify-center relative text-center px-6 overflow-hidden"
      >
        {/* BACKGROUND IMAGE WITH SLOW ZOOM */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/32616678/pexels-photo-32616678.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: [1, 1.08] }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* TITLE (FLOATING SLOWLY) */}
          <motion.h1
            className="text-5xl md:text-6xl tracking-[8px] font-light"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            PEACELUXE
          </motion.h1>

          {/* TEXT */}
          <motion.p
            className="mt-6 text-white/80 leading-relaxed text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          >
            From luxury fashion to beauty essentials — everything you need in one place.
            Retail, wholesale, and nationwide delivery available.
          </motion.p>

          {/* BUTTON WITH SOFT GLOW PULSE */}
          <a
            href="/contact"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(212,175,55,0.0)",
                  "0 0 25px rgba(212,175,55,0.4)",
                  "0 0 0px rgba(212,175,55,0.0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-[#d4af37] transition"
            >
              DM to Order
            </motion.button>
          </a>
        </motion.div>
      </section>
      {/* ABOUT */}

      <section id="collections" className="bg-black text-white py-24 px-0 md:px-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl font-light tracking-wide">
              PEACELUXE Collections
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Discover beauty, fashion, and lifestyle essentials — from luxury bags
              and footwear to skincare, haircare, and natural oils.
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
                  Explore premium fashion, beauty, and lifestyle essentials curated for elegance.
                </p>
              </div>

              {/* CARDS */}
              <div className="flex flex-col gap-20">

                {[
                  {
                    title: "Luxury Bags",
                    img: "https://images.pexels.com/photos/32616678/pexels-photo-32616678.jpeg",
                    desc: "Elegant handbags and statement pieces crafted for modern fashion lovers.",
                  },
                  {
                    title: "Footwear",
                    img: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
                    desc: "Step into style with premium shoes designed for comfort and class.",
                  },
                  {
                    title: "Vintage Wears",
                    img: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg",
                    desc: "Timeless vintage pieces that bring uniqueness and bold expression.",
                  },
                  {
                    title: "Skincare",
                    img: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
                    desc: "Glow naturally with skincare products made for radiant healthy skin.",
                  },
                  {
                    title: "Haircare",
                    img: "https://images.pexels.com/photos/6621461/pexels-photo-6621461.jpeg",
                    desc: "Nourish and style your hair with premium care essentials.",
                  },
                  {
                    title: "Natural Oils",
                    img: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg",
                    desc: "Pure natural oils for beauty, wellness, and everyday care routines.",
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
                    className="group relative overflow-hidden rounded-none md:rounded-2xl"
                  >
                    {/* IMAGE */}
                    <img
                      src={item.img}
                      className="w-full h-[300px] md:h-[420px] object-cover transition duration-700 ease-in-out group-hover:scale-105"
                    />

                    {/* GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition duration-500"></div>

                    {/* TEXT */}
                    <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-auto max-w-md">
                      <h3 className="text-2xl font-light mb-3 relative">
                        <span className="before:content-['“'] after:content-['”']">
                          {item.title}
                        </span>
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed italic opacity-90">
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

            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-500"
            >
              <h4 className="text-lg font-light mb-3">Retail & Wholesale</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                We offer flexible purchasing options for individuals and businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-500"
            >
              <h4 className="text-lg font-light mb-3">Nationwide Delivery</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Fast and reliable delivery across the country.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-500"
            >
              <h4 className="text-lg font-light mb-3">DM to Order</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Easily place your orders via WhatsApp or social media.
              </p>
            </motion.div>

          </div>
        </div>
      </section>



      {/* CONTACT */}

      <section id="contact" className="py-28 px-6 bg-black text-white relative overflow-hidden">

        <div className="max-w-5xl mx-auto text-center">

          {/* TITLE */}
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

          {/* FLOATING ICONS WRAPPER */}
          <div className="mt-20 flex justify-center items-center">

            <div className="mt-24 flex justify-center">
              <div className="relative w-[500px] h-[250px]">

                {/* WHATSAPP */}
                <motion.a
                  href="https://wa.me/"
                  target="_blank"
                  animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-10 left-10 group p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                >
                  {/* SHINE */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out"></span>

                  <FaWhatsapp className="relative text-2xl text-white/70 group-hover:text-[#d4af37] transition duration-300" />
                </motion.a>

                {/* INSTAGRAM */}
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  animate={{ y: [0, -20, 0], x: [0, -12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-0 right-10 group p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out"></span>

                  <FaInstagram className="relative text-2xl text-white/70 group-hover:text-[#d4af37] transition duration-300" />
                </motion.a>

                {/* FACEBOOK */}
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-10 left-20 group p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out"></span>

                  <FaFacebook className="relative text-2xl text-white/70 group-hover:text-[#d4af37] transition duration-300" />
                </motion.a>

                {/* TWITTER */}
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  animate={{ y: [0, -18, 0], x: [0, -10, 0] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-0 right-20 group p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out"></span>

                  <FaTwitter className="relative text-2xl text-white/70 group-hover:text-[#d4af37] transition duration-300" />
                </motion.a>

                {/* EMAIL (CENTER FOCUS) */}
                <motion.a
                  href="mailto:hello@peaceluxe.com"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group p-6 rounded-full bg-white/10 border border-[#d4af37]/30 backdrop-blur-lg overflow-hidden transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_45px_rgba(212,175,55,1)]"
                >

                  {/* SHINE (FIXED CLICK ISSUE) */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out pointer-events-none"></span>

                  <FaEnvelope className="relative text-3xl text-white/80 group-hover:text-[#d4af37] transition duration-300" />
                </motion.a>

              </div>
            </div>

          </div>

          {/* OPTIONAL CTA BUTTON */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://wa.me/"
              target="_blank"
              className="relative inline-block px-8 py-3 rounded-full border border-[#d4af37] text-[#d4af37] overflow-hidden transition duration-500 group"
            >
              {/* SHINE EFFECT */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000 ease-in-out"></span>

              {/* TEXT */}
              <span className="relative z-10 group-hover:text-black transition duration-500">
                Message Us Directly
              </span>

              {/* BACKGROUND HOVER */}
              <span className="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></span>
            </a>
          </motion.div>

          {/* FOOTER */}
          <p className="mt-12 text-white/50 text-sm tracking-wide">
            Fashion • Beauty • Lifestyle — delivered nationwide with care.
          </p>
        </div>

        {/* BACKGROUND GLOW EFFECT */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

      </section>

      <WhatsAppFloat />

    </div>
  );
}

export default Home;