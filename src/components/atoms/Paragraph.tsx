import React from "react";

type ParagraphTypes = {
  text: string;
  testId: string;
};
const Paragraph = ({ text, testId }:ParagraphTypes ) => (
    <span
      data-testid={testId}
      aria-label={`Se despliega el siguiente texto: ${text}`}
    >
      {text}
    </span>
  );

export default Paragraph;
