import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogInfo() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`https://example.com/api/blogs/${id}`);
      if (!response.ok) throw new Error("Blog not found");
      const data = await response.json();
      console.log(data);
      setBlog(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);
  return (
    <div>
      {loading && <p>Loading ...</p>}
      {error && <p>{error}</p>}
      {blog ? (
        <div>
          <h2>{blog.title}</h2>
          <p>
            <strong>Blog ID:</strong> {blog.id}
          </p>
          <p>{blog.body}</p>
        </div>
      ) : (
        <p>No blog found </p>
      )}
    </div>
  );
}
