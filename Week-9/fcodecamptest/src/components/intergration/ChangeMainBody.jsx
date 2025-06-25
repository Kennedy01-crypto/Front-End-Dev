//ChildComponent called ChangeMainBody.js
import React, { useState } from "react";

function ChangeMainBody({ setMainBody }) {
  const [ChangeMainBody, setChangeMainBody] = useState("Changed Text");

  function handleClick() {
    setChangeMainBody("New Text");
    setMainBody("New Text");
  }

  return (
    <div>
      <div>{ChangeMainBody}</div>
      <button onClick={handleClick}>Change Main Body</button>
    </div>
  );
}

export default ChangeMainBody;
