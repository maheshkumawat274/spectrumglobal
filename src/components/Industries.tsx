import React from "react";
import { Briefcase } from "lucide-react";

interface Industry {
  title: string;
  image: string;
}

const industries: Industry[] = [
  {
    title: "Corporate & Professional Services",
    image:
      "/imgs/industries.avif",
  },
  {
    title: "Manufacturing & Engineering",
    image:
      "/imgs/MfgEng.jpg",
  },
  {
    title: "Technology & IT Services",
    image:
      "/imgs/IT-Infrastructure.webp",
  },
  {
    title: "Retail & Consumer Businesses",
    image:
      "/imgs/f4b7cf.jpeg",
  },
  {
    title: "SMEs, Startups & Growing Enterprises",
    image:
      "/imgs/Difference-between-start-up-SME.jpg",
  },
];

const IndustriesWeServe: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#2B73B3] font-semibold text-sm uppercase tracking-wide mb-2">
            Industries
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Serving Diverse Sectors
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We partner with organizations across industries to deliver
            people-focused HR solutions that drive sustainable business growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto -mt-12 relative z-10 shadow-sm">
                  <Briefcase className="w-6 h-6 text-[#2B73B3]" />
                </div>

                <h3 className="mt-4 text-gray-900 font-semibold text-sm leading-snug">
                  {industry.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
