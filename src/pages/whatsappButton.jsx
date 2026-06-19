import { useState } from "react";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";

const contacts = [
  {
    name: "Sales & Orders",
    phone: "2347078917208",
  },
  {
    name: "Customer Support",
    phone: "2348162830837",
  },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block mt-3">

      <button
        onClick={() => setOpen(!open)}
        className="
          inline-flex items-center gap-2
          px-4 py-2
          rounded-full
          border border-[#d4af37]
          text-[#d4af37]
          hover:bg-[#d4af37]
          hover:text-black
          transition
        "
      >
        <FaWhatsapp />
        Chat on WhatsApp
        <FaChevronDown size={12} />
      </button>

      {open && (
        <div
          className="
            absolute top-14 left-0
            w-64
            bg-black
            border border-[#d4af37]/30
            rounded-2xl
            overflow-hidden
            shadow-2xl
            z-50
          "
        >
          {contacts.map((contact) => (
            <a
              key={contact.phone}
              href={`https://wa.me/${contact.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                px-4 py-3
                hover:bg-[#d4af37]/10
                transition
              "
            >
              <FaWhatsapp className="text-green-500" />

              <div>
                <p className="text-white text-sm font-medium">
                  {contact.name}
                </p>

                <p className="text-xs text-gray-400">
                  +{contact.phone}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}

    </div>
  );
}