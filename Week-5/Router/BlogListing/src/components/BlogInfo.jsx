import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogInfo() {
  const { userId, id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlog = async () => {
    try {
      const response = await fetch("/src/assets/posts.json");
      if (!response.ok) throw new Error("Blog not found");
      const data = await response.json();
      const found = data.find(
        (b) =>
          String(b.id) === String(id) && String(b.userId) === String(userId)
      );
      if (!found) throw new Error("Blog not Found Again");
      setBlog(found);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [userId, id]);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded shadow">
      {loading && <p className="text-blue-600 font-semibold">Loading ...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {blog ? (
        <div>
          <h2 className="text-2xl font-bold mb-2 text-blue-700">
            {blog.title}
          </h2>
          <div className="mb-4 text-gray-600">
            <span className="font-semibold">Blog ID:</span> {blog.id}
          </div>
          <p className="mb-6 text-gray-800 whitespace-pre-line">{blog.body}</p>
          <Link
            to={`/blogs/${userId}`}
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            More posts by {blog.name || "this user"}
          </Link>
        </div>
      ) : (
        !loading && <p className="text-gray-500">No blog found</p>
      )}
    </div>
  );
}
