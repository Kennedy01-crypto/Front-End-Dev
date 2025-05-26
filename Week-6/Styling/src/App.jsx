import React from "react";
import styled from "styled-components";
import MyJSSComponent from "./MyJSSComponent";

const DynamicButton = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function App() {
  return (
    <div>
      <DynamicButton primary>Primary Button</DynamicButton>
      <DynamicButton>Secondary Button</DynamicButton>
      <MyJSSComponent />
    </div>
  );
}
export default App;
