import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
import WhatsAppFloat from "./whatsaappfloat";

export default function Contact() {
  const [message, setMessage] = useState("");

  const whatsappContacts = [
    {
      name: "Sales & Orders",
      phone: "2347078917208",
      description: "Perfumes, skincare & beauty orders",
    },
    {
      name: "Customer Support",
      phone: "2348162830837",
      description: "Questions, delivery & assistance",
    },
  ];

  const [selectedContact, setSelectedContact] = useState(
    whatsappContacts[0]
  );

  const whatsappLink = `https://wa.me/${
    selectedContact.phone
  }?text=${encodeURIComponent(
    message ||
      `Hello JJL_SCENTS 👋

I would love to purchase one of your products.

Please send your available collections, prices, recommendations and sizes.

Thank you.`
  )}`;

  return (
    <section className="bg-black text-white py-32 px-6 relative overflow-hidden">

      {/* LUXURY BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          className="absolute w-[600px] h-[600px] bg-[#d4af37]/20 blur-[160px] top-0 left-0 rounded-full"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute w-[700px] h-[700px] bg-white/10 blur-[180px] bottom-0 right-0 rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
        />

      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-6xl font-light tracking-widest">
            JJL_SCENTS
          </h2>

          <p className="text-white/60 mt-5 max-w-2xl mx-auto leading-relaxed">
            Luxury perfumes, premium skincare, and unforgettable
            fragrances curated to elevate your presence.
          </p>

          <div className="flex justify-center gap-3 mt-6 flex-wrap">

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs">
              Fast Response
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs">
              Luxury Service
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs">
              24/7 Orders
            </span>

          </div>

        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="relative overflow-hidden rounded-3xl"
          >

            <img
              src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
              alt=""
              className="w-full h-[600px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-8">

              <h3 className="text-3xl font-light">
                Beauty Meets Luxury
              </h3>

              <p className="text-white/70 mt-2">
                Personalized fragrance recommendations
              </p>

            </div>

          </motion.div>

          {/* CONTACT PANEL */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              backdrop-blur-2xl
            "
          >

            <h3 className="text-2xl font-light mb-2">
              Contact Us
            </h3>

            <p className="text-white/50 text-sm mb-8">
              Select a Contact and send your request directly.
            </p>

            {/* CONTACT SELECTOR */}
            <div className="space-y-3 mb-8">

              {whatsappContacts.map((contact) => (

                <button
                  key={contact.phone}
                  onClick={() =>
                    setSelectedContact(contact)
                  }
                  className={`
                    w-full text-left p-4 rounded-2xl border transition-all
                    ${
                      selectedContact.phone === contact.phone
                        ? "bg-[#d4af37] text-black border-[#d4af37]"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }
                  `}
                >

                  <div className="font-semibold">
                    {contact.name}
                  </div>

                  <div
                    className={`text-sm mt-1 ${
                      selectedContact.phone === contact.phone
                        ? "text-black/70"
                        : "text-white/50"
                    }`}
                  >
                    {contact.description}
                  </div>

                  <div
                    className={`text-xs mt-2 ${
                      selectedContact.phone === contact.phone
                        ? "text-black/60"
                        : "text-white/40"
                    }`}
                  >
                    +{contact.phone}
                  </div>

                </button>

              ))}

            </div>

            {/* MESSAGE */}
            <textarea
              rows={6}
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Tell us what fragrance, skincare or beauty products you're interested in..."
              className="
                w-full
                p-5
                rounded-2xl
                bg-black/40
                border
                border-white/10
                outline-none
                focus:border-[#d4af37]
                text-white
                placeholder-white/40
              "
            />

            {/* CTA */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-4
                w-full
                py-4
                rounded-2xl
                bg-[#d4af37]
                text-black
                font-semibold
                shadow-xl
              "
            >

              <FaWhatsapp size={22} />

              <div className="text-left">

                <div>
                  Send WhatsApp Message
                </div>

                <div className="text-xs opacity-70">
                  {selectedContact.name}
                </div>

              </div>

            </motion.a>

            {/* SOCIALS */}
            <div className="flex justify-center gap-8 mt-10">

              <FaInstagram className="text-xl text-white/60 hover:text-[#d4af37] cursor-pointer transition" />

              <FaFacebook className="text-xl text-white/60 hover:text-[#d4af37] cursor-pointer transition" />

              <FaTwitter className="text-xl text-white/60 hover:text-[#d4af37] cursor-pointer transition" />

            </div>

            <p className="text-center text-white/40 text-sm mt-6">
              Premium customer care • Luxury experience • Fast replies
            </p>

          </motion.div>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">

          {[
            {
              title: "Luxury Fragrance Service",
              desc: "Personalized perfume recommendations based on your personality and lifestyle.",
            },
            {
              title: "Beauty Concierge",
              desc: "Expert skincare and beauty product guidance tailored to your needs.",
            },
            {
              title: "VIP Ordering",
              desc: "Private ordering experience with premium customer support.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
              className="
                p-8
                rounded-2xl
                bg-white/5
                border
                border-white/10
                hover:bg-white/10
                transition
              "
            >

              <h4 className="text-lg mb-3">
                {item.title}
              </h4>

              <p className="text-white/60 text-sm">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      <WhatsAppFloat />
    </section>
  );
}