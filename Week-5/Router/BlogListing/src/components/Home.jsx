import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        Welcome to the Blog Listing App!
      </h1>
      <p className="mb-4 text-gray-700">
        This is a simple React app where you can:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Browse all blog posts</li>
        <li>View posts by individual users</li>
        <li>Read detailed information about each blog post</li>
      </ul>
      <div className="flex gap-4 mt-6">
        <Link
          to="/blogs"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          View All Blogs
        </Link>
        <Link
          to="/blogs/1"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          View Sample User's Posts
        </Link>
      </div>
    </div>
  );
}
