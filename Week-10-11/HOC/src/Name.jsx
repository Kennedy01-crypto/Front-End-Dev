import React from "react";
// Higher-Order Component (HOC) as a functional component
const withName = (OriginalComponent) => {
  const NewComponent = (props) => {
    return <OriginalComponent {...props} name="Jim Kennedy" />;
  };
  return NewComponent;
};
export default withName;
