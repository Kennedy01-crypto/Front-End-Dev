import React from "react";
import Profile from "./Profile";

const App = (props) => {
  return (
    <div>
      <Profile
        name="Annabel Monroe"
        photo="../public/person1.jpg"
        bio="I am a software engineer"
      />
      <Profile
        name="Richard Nixon"
        photo="../public/person4.jpg"
        bio="I was an american predident"
      />
      <Profile
        name="John Doe"
        photo="../public/person2.jpg"
        bio="I am an engineer"
      />
    </div>
  );
};

export default App;
