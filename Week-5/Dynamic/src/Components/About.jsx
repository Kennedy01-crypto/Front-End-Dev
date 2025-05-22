import React from "react";

const About = () => (
  <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-8">
    <h1 className="text-3xl font-bold text-green-700 text-center mb-4">
      About Green Haven Wildlife Sanctuary
    </h1>
    <section>
      <h2 className="text-xl font-semibold text-green-800 mb-2">Our Story</h2>
      <p className="text-gray-700">
        Founded in 1998, Green Haven Wildlife Sanctuary began as a small rescue
        center for injured and orphaned animals. Over the years, we have grown
        into a leading sanctuary dedicated to the protection and rehabilitation
        of wildlife, as well as fostering a deeper connection between people and
        nature.
      </p>
    </section>
    <section>
      <h2 className="text-xl font-semibold text-green-800 mb-2">Our Values</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Compassion for all living beings</li>
        <li>Commitment to conservation and sustainability</li>
        <li>Education and community involvement</li>
        <li>Transparency and ethical practices</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold text-green-800 mb-2">
        Meet Our Team
      </h2>
      <p className="text-gray-700">
        Our dedicated team includes wildlife biologists, veterinarians,
        educators, and passionate volunteers. Together, we work tirelessly to
        ensure the well-being of our animal residents and to inspire the next
        generation of conservationists.
      </p>
    </section>
    <section>
      <h2 className="text-xl font-semibold text-green-800 mb-2">Join Us</h2>
      <p className="text-gray-700">
        Whether you’re interested in volunteering, donating, or simply visiting,
        we welcome you to be part of our mission to protect and celebrate
        wildlife. Thank you for supporting Green Haven Wildlife Sanctuary!
      </p>
    </section>
  </div>
);

export default About;
