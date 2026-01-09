import React from "react";
import { MapPin } from "lucide-react";

const ContactMap: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
            Our Locations
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Visit Our Offices
          </h2>
          <p className="text-gray-600 mt-4">
            Our teams operate from strategically located offices to better
            support our clients.
          </p>
        </div>

        {/* Map + Address */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {/* Address Cards */}
          <div className="space-y-6">
            {/* Registered Office */}
            <div className="bg-white rounded-2xl p-6 shadow-md border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Registered Office
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    D-113, Sector-36 <br />
                    Greater Noida – 201310
                  </p>
                </div>
              </div>
            </div>

            {/* Working Office */}
            <div className="bg-white rounded-2xl p-6 shadow-md border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Working Office
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    C-52, Sector-2, 3rd Floor <br />
                    Noida – 201301
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-xl border">
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53866.35648818698!2d77.31592959999999!3d28.584687499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d0000001%3A0xa93d12979e5b01c7!2sSPECTRUM%20GLOBAL!5e1!3m2!1sen!2sin!4v1767964144396!5m2!1sen!2sin"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
