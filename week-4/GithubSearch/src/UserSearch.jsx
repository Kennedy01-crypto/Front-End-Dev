import React from "react";
import { useState } from "react";

export const UserSearch = ({ handleSubmit, username, setUsername }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (username) {
      handleSubmit(username);
    } else {
      alert("Please enter a username");
    }
  };
  return (
    <div className="flex  flex-col items-center  text-white justify-center h-screen">
      <form onSubmit={onSubmit}>
        <h1 className="text-3xl  font-bold">GitHub User Search</h1>
        <input
          type="text"
          placeholder="Enter Github username"
          className="bg-neutral-600 text-xl"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit" className="">
          Search
        </button>
      </form>
    </div>
  );
};
