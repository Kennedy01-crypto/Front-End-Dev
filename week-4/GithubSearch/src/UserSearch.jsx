import React from "react";
import { useState } from "react";

export const UserSearch = ({ handleSubmit, username, setUsername }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(username);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 className="text-3xl font-bold ">GitHub User Search</h1>
        <input
          type="text"
          placeholder="Enter Github username"
          className=""
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
