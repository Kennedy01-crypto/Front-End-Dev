import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch("/src/assets/posts.json");
      const data = await response.json();
      setBlogs(data);
      // console.log(data);
    } catch (err) {
      setError(err.message);
      console.error(error);
    } finally {
      console.log("Finally block executed");
      setLoading(false);
    }
  };

  useEffect(() => handleSearch, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">
        This is the Blogs page
      </h1>
      {loading && <p className="text-green-800 font-extrabold">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {blogs && (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-4 border rounded hover:shadow transition bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="flex flex-col">
                <Link
                  to={`/blogs/${blog.userId}/${blog.id}`}
                  className="text-lg font-semibold text-blue-600 hover:underline hover:font-bold"
                >
                  {blog.title}
                </Link>
                <div className="text-sm text-gray-600 mt-1">
                  {blog.name && (
                    <>
                      {" "}
                      <span className="italic">by {blog.name}</span>
                    </>
                  )}
                </div>
              </div>
              <Link
                to={`/blogs/${blog.userId}/${blog.id}`}
                className="mt-2 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition self-start md:self-auto"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
