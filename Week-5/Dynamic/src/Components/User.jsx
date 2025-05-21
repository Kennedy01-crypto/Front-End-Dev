import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>User Page</h1>
      <p>Welcome to the User page!</p>
      <p>
        <strong>User ID: </strong> {id}
      </p>
    </div>
  );
};

export default User;
