import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function UserInfo() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/src/assets/posts.json");
      const data = await response.json();
      setPosts(data.filter((post) => String(post.userId) === String(userId)));
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [userId]);

  if (loading)
    return (
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded shadow">
        <p className="text-blue-600 font-semibold">Loading ...</p>
      </div>
    );
  if (error)
    return (
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded shadow">
        <p className="text-red-500">{error}</p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        {posts.length > 0 ? `${posts[0].name}'s Posts` : "User's Posts"}
      </h2>
      {posts.length === 0 && (
        <p className="text-gray-500">No posts found for this user.</p>
      )}
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-2">
            <Link
              to={`/blogs/${userId}/${post.id}`}
              className="text-blue-600 hover:underline font-semibold"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          to="/blogs"
          className="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
        >
          &larr; Back to All Blogs
        </Link>
      </div>
    </div>
  );
}
