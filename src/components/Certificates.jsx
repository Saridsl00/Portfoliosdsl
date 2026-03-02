import React from "react";
import JIDOKA from "../assets/JIDOKA.pdf";

const Certificates = ({ darkMode }) => {

  const certificates = [
    {
      title: "Uji Kompetensi Basis Data",
      issuer: "PT Jidoka System Indonesia",
      file: JIDOKA
    }
  ];

  const colors = darkMode
    ? {
        bg: "bg-gray-900",
        card: "bg-gray-800",
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        buttonSecondary: "border-gray-500 text-gray-300 hover:bg-gray-700"
      }
    : {
        bg: "bg-gray-100",
        card: "bg-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-600",
        buttonSecondary: "border-gray-400 text-gray-700 hover:bg-gray-200"
      };

  return (
    <section
      id="certificates"
      className={`py-20 px-6 ${colors.bg}`}
    >
      <div className="max-w-6xl mx-auto">
        
        <h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${colors.textPrimary}`}
          data-aos="fade-up"
        >
          My <span className="text-orange-500">Certificates</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${colors.card}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className={`text-xl font-semibold mb-2 ${colors.textPrimary}`}>
                {cert.title}
              </h3>

              <p className={`mb-4 ${colors.textSecondary}`}>
                Issued by: {cert.issuer}
              </p>

              <div className="flex gap-4">
                
                {/* View */}
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 text-white rounded-full hover:shadow-[0_0_20px_rgba(255,165,0,0.7)] transition"
                >
                  View
                </a>

                {/* Download */}
                <a
                  href={cert.file}
                  download
                  className={`px-4 py-2 rounded-full border ${colors.buttonSecondary} transition`}
                >
                  Download
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;