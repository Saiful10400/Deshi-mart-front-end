import React from "react";

const CloneElement = ({
  element,
  count,
}: {
  element: React.ReactElement;
  count: number;
}) => {
  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(element);
  }
  return <>{...elements}</>;
};

export default CloneElement;
