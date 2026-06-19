import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  const contacts = [
    {
      name: "Sales & Orders",
      phone: "2347078917208",
      message:
        "Hello JJL_SCENTS 👋. I would like to purchase a perfume. Please send available fragrances and prices.",
    },
    {
      name: "Customer Support",
      phone: "2348162830837",
      message:
        "Hello JJL_SCENTS 👋. I need assistance with an order or product inquiry.",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* CONTACT MENU */}
      {open && (
        <div className="absolute bottom-20 right-0 w-72 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

          <div className="p-4 bg-green-500 text-white">
            <h3 className="font-bold">
              Chat with JJL_SCENTS
            </h3>
            <p className="text-xs opacity-90">
              Choose a Contact
            </p>
          </div>

          <div className="p-3 space-y-2">

            {contacts.map((contact) => (
              <a
                key={contact.phone}
                href={`https://wa.me/${contact.phone}?text=${encodeURIComponent(
                  contact.message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3
                  p-3 rounded-2xl
                  hover:bg-green-50
                  transition
                "
              >
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">
                  <FaWhatsapp />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    {contact.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    +{contact.phone}
                  </p>
                </div>
              </a>
            ))}

          </div>
        </div>
      )}

      {/* FLOAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-16 h-16
          rounded-full
          bg-green-500
          text-white
          shadow-xl
          hover:bg-green-600
          transition-all
          hover:scale-110
          flex items-center justify-center
        "
      >
        {open ? (
          <FaTimes size={24} />
        ) : (
          <FaWhatsapp size={32} />
        )}
      </button>

    </div>
  );
}