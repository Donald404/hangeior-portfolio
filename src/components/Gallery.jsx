import { useState } from "react";

import design1 from "../assets/images/design1.png";
import design2 from "../assets/images/design2.png";
import design3 from "../assets/images/design3.png";
import design4 from "../assets/images/design4.jpeg";
import design5 from "../assets/images/design5.png";
import design6 from "../assets/images/design6.png";

import SectionWrapper from "./ui/SectionWrapper";
import Lightbox from "./ui/Lightbox";

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  const designs = [

    {
      title: "Luxury Birthday Flyer",
      category: "Flyer Design",
      image: design1,
    },

    {
      title: "Church Programme Flyer",
      category: "Church Design",
      image: design2,
    },

    {
      title: "Business Branding",
      category: "Brand Identity",
      image: design3,
    },

    {
      title: "Social Media Campaign",
      category: "Social Media Design",
      image: design4,
    },

    {
      title: "Conference Poster",
      category: "Poster Design",
      image: design5,
    },

    {
      title: "Event Banner",
      category: "Banner Design",
      image: design6,
    },

  ];

  return (

    <SectionWrapper>

      <section
        id="gallery"
        className="py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              Featured Design Works
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto leading-8">
              A curated collection of graphic design projects showcasing my
              creativity, attention to detail, and passion for delivering
              visually engaging designs across different industries.
            </p>

          </div>

          {/* Gallery */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {designs.map((design, index) => (

              <div
                key={index}
                onClick={() => setSelectedImage(design)}
                className="cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >

                {/* Image */}

                <div className="overflow-hidden">

                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-80 object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Content */}

                <div className="p-6">

                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {design.category}
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {design.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Click to preview design
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        <Lightbox
          image={selectedImage?.image}
          title={selectedImage?.title}
          onClose={() => setSelectedImage(null)}
        />

      </section>

    </SectionWrapper>

  );
}

export default Gallery;