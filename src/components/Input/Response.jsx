import React from "react";
import { Context } from "../../context/Context";

const Message = React.memo(function Message({ text }) {
  console.log("Rendered:", text);
  return (
    <div style={{ padding: "8px", border: "1px solid gray", marginBottom: "8px" }}>
      {text}
    </div>
  );
});

export default function Response({ resultData }) {
  const { loading } = React.useContext(Context);
  console.log("Response component rendered with data:", resultData);

  if (loading) {
    return (
      <div className="response-item">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="response-item">
      {resultData.map((msg, idx) => (
        <Message key={idx} text={msg} />
      ))}
    </div>
  );
}