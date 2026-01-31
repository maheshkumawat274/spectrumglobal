import React, { useState } from "react";
import { apiPost } from "../../services/api";



import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  type ApiResponse = {
  status: "success" | "error";
  message: string;
};

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Name: only letters
    if (name === "name" && /[^a-zA-Z\s]/.test(value)) return;

    // Phone: only numbers
    if (name === "phone" && /[^0-9]/.test(value)) return;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await apiPost<ApiResponse>("save_contact.php", form);

    if (res.status === "success") {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert(res.message);
    }
  } catch (err: any) {
    alert(err.message || "Server error");
  }
};

  return (
    <section className="relative py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-start md:text-center max-w-3xl mx-auto mb-20">
          <p className="text-[#2B73B3] font-semibold uppercase tracking-wide text-sm">
            Contact Us
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Let’s Build Stronger Teams Together
          </h2>
          <p className="text-gray-600 mt-4">
            Connect with our HR consulting experts to discuss how we can support
            your organization’s growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT – Contact Details */}
          <div className="bg-[#2B73B3] text-white rounded-3xl p-4 md:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-semibold mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4 items-start">
                  <Mail className="mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:support@spectrumglobal.in"
                      className="text-blue-100 hover:text-white"
                    >
                      support@spectrumglobal.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <Phone className="mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:9312567832" className="block text-blue-100">
                      Mobile: +91-9312567832
                    </a>
                    <a
                      href="tel:+917042370046"
                      className="block text-blue-100"
                    >
                      Mobile: +91-7042370046
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <MapPin className="mt-1" />
                  <div className="text-sm leading-relaxed">
                    <p className="font-medium mb-1">Registered Office</p>
                    D-113, Sector-36, Greater Noida – 201310
                    <p className="font-medium mt-3 mb-1">Working Office</p>
                    C-52, Sector-2, 3rd Floor, Noida – 201301
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-10">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#2B73B3] transition"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Form */}
          <div className="bg-white rounded-3xl p-4 md:p-10 shadow-xl border">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Send a Message
            </h3>

            {submitted ? (
              <div className="text-center py-20">
                <Send className="mx-auto text-green-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900">
                  Thank you for contacting us
                </h4>
                <p className="text-gray-600 mt-2">
                  Our team will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="modern-input"
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="modern-input"
                  />
                </div>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="modern-input"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="modern-input resize-none"
                />

                <button className="w-full bg-[#2B73B3] text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                  Send Message <Send size={16} />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your details remain confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* INPUT STYLE */}
      <style>{`
        .modern-input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          font-size: 15px;
          outline: none;
          transition: all 0.2s;
        }
        .modern-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
