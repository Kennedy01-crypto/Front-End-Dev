import React from "react";

const Contact = () => (
  <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow space-y-8">
    <h1 className="text-3xl font-bold text-green-700 text-center mb-4">
      Contact Us
    </h1>
    <section className="space-y-2">
      <p className="text-gray-700">
        Have questions, want to volunteer, or need more information? Reach out
        to us!
      </p>
      <div className="text-left space-y-1">
        <p>
          <span className="font-semibold text-green-800">Email:</span>{" "}
          <a
            href="mailto:info@greenhaven.org"
            className="text-blue-600 hover:underline"
          >
            info@greenhaven.org
          </a>
        </p>
        <p>
          <span className="font-semibold text-green-800">Phone:</span>{" "}
          <a href="tel:+1234567890" className="text-blue-600 hover:underline">
            +254 745-288082
          </a>
        </p>
        <p>
          <span className="font-semibold text-green-800">Address:</span> <br />
          123 Sanctuary Lane, Tatu City, Kenya
        </p>
      </div>
    </section>
    <section>
      <h2 className="text-xl font-semibold text-green-800 mb-2">
        Send Us a Message
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
            id="message"
            name="message"
            rows="4"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  </div>
);

export default Contact;
