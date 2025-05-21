import React from "react";

const Home = () => (
  <div className="text-center space-y-8">
    <h1 className="text-4xl font-bold text-green-700 mb-4">
      Wildlife Sanctuary
    </h1>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
      Welcome to the Green Haven Wildlife Sanctuary! Nestled in the heart of
      nature, our sanctuary is dedicated to the protection, rehabilitation, and
      celebration of wildlife. We provide a safe haven for endangered species
      and offer educational experiences for visitors of all ages.
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
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
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-green-800 mb-2">
        Plan Your Visit
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto">
        Explore our sanctuary, meet our animal residents, and learn how you can
        support wildlife conservation. Use the navigation bar above to discover
        more about us, get in touch, or view our featured animals!
      </p>
    </div>
  </div>
);

export default Home;
