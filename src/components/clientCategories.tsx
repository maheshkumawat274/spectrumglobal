import React from "react";

interface ClientCategory {
  title: string;
  description: string;
}

interface ClientLogo {
  name: string;
  logo: string;
}

const clientLogos: ClientLogo[] = [
  {
    name: "Client One",
    logo: "/imgs/cadence-logo-black.png",
  },
  {
    name: "Client Two",
    logo: "/imgs/LT.png",
  },
  {
    name: "Client Three",
    logo: "/imgs/dishtv-logonew.webp",
  },
  {
    name: "Client Four",
    logo: "/imgs/JSW-logo-blue-logo.png",
  },
  {
    name: "Client Five",
    logo: "/imgs/stier-solution-logo.png",
  },
  {
    name: "Client Six",
    logo: "/imgs/ang.png",
  },
  {
    name: "Client Four",
    logo: "/imgs/EAPR.png",
  },
  {
    name: "Client Five",
    logo: "/imgs/ITC_Hotels_logo.svg.png",
  },
  {
    name: "Client Six",
    logo: "/imgs/Screenshot 2026-01-10 170540.png",
  },
   {
    name: "Client Six",
    logo: "/imgs/babapng.png",
  },
   {
    name: "Client Six",
    logo: "/imgs/Screenshot 2026-01-10 171143.png",
  },

];

const clientCategories: ClientCategory[] = [
  {
    title: "Corporate & Professional Services",
    description:
      "Partnering with established organizations to strengthen leadership, performance, and people strategy.",
  },
  {
    title: "Manufacturing & Engineering",
    description:
      "Supporting operational excellence through compliant, scalable, and structured HR frameworks.",
  },
  {
    title: "Technology & IT-Enabled Services",
    description:
      "Helping fast-paced tech organizations attract talent and build future-ready teams.",
  },
  {
    title: "Retail & Consumer Businesses",
    description:
      "Enabling workforce agility, performance management, and growth-focused HR systems.",
  },
  {
    title: "Startups & Fast-Growing Enterprises",
    description:
      "Building HR foundations from the ground up to support rapid and sustainable growth.",
  },
];

const OurEsteemedClients: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto ">
        {/* Heading */}
        <div className="text-center mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Esteemed Clients
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are proud to partner with organizations that trust us with their
            people strategy and HR transformation initiatives.
          </p>
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientCategories.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 text-gray-700 font-semibold">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed">
            Our client relationships are built on{" "}
            <span className="font-semibold text-gray-900">trust</span>,{" "}
            <span className="font-semibold text-gray-900">
              long-term partnerships
            </span>
            , and the consistent delivery of measurable value.
          </p>
        </div>

        {/* Logo Placeholder */}
        <div className="mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-70">
            {clientLogos.map((client, i) => (
              <div
                key={i}
                className="h-16 rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-sm text-gray-400"
              >
                <img src={client.logo} alt={client.name} className="h-full w-full object-contain" />
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Client logos and detailed case studies can be showcased here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurEsteemedClients;
