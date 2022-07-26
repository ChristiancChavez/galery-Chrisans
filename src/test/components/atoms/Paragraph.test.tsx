import { render, screen } from "@testing-library/react";
import React from "react";
import Paragraph from "src/components/atoms/Paragraph";

describe("test Paragraph component", () => {
  test("should render a paragraph", () => {
    render(<Paragraph text="este es un parrafo" testId="paragraph" />);
    const paragraph = screen.getByText("este es un parrafo");
    expect(paragraph).toBeInTheDocument();
  });

  test("should render a paragraph by testId", () => {
    render(<Paragraph text="" testId="paragraph" />);
    const paragraph = screen.getByTestId("paragraph");
    expect(paragraph.innerHTML).toBe('');
  });
});
