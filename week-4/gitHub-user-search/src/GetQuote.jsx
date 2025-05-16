import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      title,
      body,
    };

    // Make POST request to send data
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((response) => {
        setResponseMessage("Post created successfully!");
      })
      .catch((err) => {
        setResponseMessage("Error creating post");
      });
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default CreatePost;
