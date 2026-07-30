import { useState } from "react";

import design1 from "../assets/images/design1.jpg";
import design2 from "../assets/images/design2.jpeg";
import design3 from "../assets/images/design3.png";
import design4 from "../assets/images/design4.png";
import design5 from "../assets/images/design5.png";
import design6 from "../assets/images/design6.png";

import SectionWrapper from "./ui/SectionWrapper";
import Lightbox from "./ui/Lightbox";

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  const designs = [

    {
      title: "Luxury Birthday Flyer",
      image: design1,
    },

    {
      title: "Church Program Flyer",
      image: design2,
    },

    {
      title: "Business Branding",
      image: design3,
    },

    {
      title: "Social Media Campaign",
      image: design4,
    },

    {
      title: "Conference Poster",
      image: design5,
    },

    {
      title: "Event Banner",
      image: design6,
    },

  ];

  return (

    <SectionWrapper>

      <section
        id="gallery"
        className="py-24 bg-gray-100"
      >

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-blue-600 mb-4">
            Graphic Design Portfolio
          </h2>

          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            A selection of graphic design projects showcasing creativity,
            attention to detail, and visual communication.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {designs.map((design, index) => (

              <div
                key={index}
                onClick={() => setSelectedImage(design)}
                className="cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500"
              >

                <div className="overflow-hidden">

                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-72 object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-gray-800 text-center">
                    {design.title}
                  </h3>

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