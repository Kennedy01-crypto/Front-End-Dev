import React from "react";

const Profile = (props) => {
  return (
    <div className="square">
      <img
        src={props.photo}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "25px",
          objectFit: "cover",
        }}
      />
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
};

export default Profile;
