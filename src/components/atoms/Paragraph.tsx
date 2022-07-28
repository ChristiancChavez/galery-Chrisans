import React from "react";

type ParagraphTypes = {
  text: string;
  testId: string;
};
const Paragraph = ({ text, testId }:ParagraphTypes ) => (
    <p
      data-testid={testId}
      aria-label={`Se despliega el siguiente texto: ${text}`}
    >
      {text}
    </p>
  );

export default Paragraph;
