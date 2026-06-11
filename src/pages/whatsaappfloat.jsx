import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2347078917208?text=Hello%20JJL_SCENTS%20%F0%9F%91%8B.%20I%20would%20love%20to%20purchase%20a%20lovely%20perfume.%20I'm%20looking%20for%20something%20long-lasting%2C%20luxurious%2C%20and%20capable%20of%20leaving%20a%20memorable%20impression.%20Please%20send%20me%20your%20best%20recommendations%2C%20available%20sizes%2C%20and%20prices.%20Thank%20you." 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
}