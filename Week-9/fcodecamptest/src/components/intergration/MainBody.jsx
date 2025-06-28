//ParentComponent called MainBody.js
import React, { useState } from "react";
import ChangeMainBody from "./ChangeMainBody";

function MainBody() {
  const [mainBody, setMainBody] = useState("Initial Text");

  return (
    <div>
      <h1>This is {mainBody}</h1>
      <ChangeMainBody setMainBody={setMainBody} />
    </div>
  );
}

export default MainBody;
