import { usePopup } from "./usePopup";
import { Mail, X } from "lucide-react";

const PopupModal = () => {
  const { isOpen, closePopup } = usePopup();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6">
      <div className="relative bg-white p-8 rounded-2xl w-full max-w-sm shadow-2xl animate-fadeIn">

        {/* CLOSE BUTTON */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        {/* HEADER */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Apply for This Position
        </h3>

        <p className="text-gray-600 text-sm mb-6">
          Interested candidates can apply by sending their updated CV to the
          email address below.
        </p>

        {/* EMAIL CARD */}
        <a
          href="mailto:career@spectrumglobal.in"
          className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 hover:shadow-md transition group"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-105 transition">
            <Mail className="text-blue-600" />
          </div>

          <div>
            <h4 className="text-gray-900 font-medium">
              Email Your CV
            </h4>
            <p className="text-blue-600 text-sm">
              career@spectrumglobal.in
            </p>
          </div>
        </a>

        {/* FOOTER NOTE */}
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-gray-600 text-xs text-center">
            Please mention the <span className="font-medium">job title</span> in
            the email subject line. We ensure complete confidentiality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
