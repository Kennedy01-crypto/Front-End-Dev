import React from "react";

const Home = () => (
  <div className="text-center space-y-10">
    {/* Welcome Section */}
    <h1 className="text-4xl font-bold text-green-700 mb-2">
      Green Haven Wildlife Sanctuary
    </h1>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
      Welcome to the Green Haven Wildlife Sanctuary! Nestled in the heart of
      nature, our sanctuary is dedicated to the protection, rehabilitation, and
      celebration of wildlife. We provide a safe haven for endangered species
      and offer educational experiences for visitors of all ages.
    </p>

    {/* Quick Facts */}
    <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 ">
      <div className="bg-green-50 rounded-lg shadow p-6 flex-1">
        <h2 className="text-2xl font-semibold text-green-800 mb-2">
          Our Mission
        </h2>
        <p className="text-gray-700">
          To conserve biodiversity, rescue and rehabilitate injured animals, and
          inspire a love for wildlife through education and community
          engagement.
        </p>
      </div>
      <div className="bg-green-50 rounded-lg shadow p-6 flex-1">
        <h2 className="text-2xl font-semibold text-green-800 mb-2">
          Sanctuary Highlights
        </h2>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
          <li>Over 200 species of birds, mammals, and reptiles</li>
          <li>Guided nature walks and safari tours</li>
          <li>Interactive learning center for kids</li>
          <li>Volunteer and internship opportunities</li>
        </ul>
      </div>
    </div>

    {/* Visitor Information */}
    <div className="mt-8 bg-green-100 rounded-lg p-6 max-w-3xl mx-auto shadow space-y-4">
      <h2 className="text-xl font-semibold text-green-800 mb-2">
        Visitor Information
      </h2>
      <p className="text-gray-700">
        <span className="font-semibold">Opening Hours:</span> 9:00 AM – 6:00 PM,
        Monday to Sunday
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Location:</span> 123 Sanctuary Lane,
        Tatu City
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Admission:</span> Adults $10, Children
        $5, Under 5 Free
      </p>
      <p className="text-gray-700">
        Group tours and school visits are welcome! Please contact us in advance
        to schedule your visit.
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-green-800 mb-2">
        Plan Your Visit
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-4">
        Explore our sanctuary, meet our animal residents, and learn how you can
        support wildlife conservation. Use the navigation bar above to discover
        more about us, get in touch, or view our featured animals!
      </p>
      <a
        href="/contact"
        className="inline-block bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition-colors"
      >
        Contact Us to Book a Tour
      </a>
    </div>
  </div>
);

export default Home;
