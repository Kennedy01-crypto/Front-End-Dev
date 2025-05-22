import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setBlogs(data);
      console.log(data);
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
    <div>
      <h1>This is the Blogs page</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {blogs && (
        <div>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <Link
                to={`/blogs/${blog.id}`}
                style={{ color: "blue", textDecoration: "none" }}
              >
                <span>Title: </span>
                {blog.title}
              </Link>
              <span>Blog Number:</span>
              {blog.id}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
