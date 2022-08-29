import React from "react";
import { render, screen } from "@testing-library/react";
import Diagram from "./Diagram";

describe('Diagram component', () => {
  test('List renders', () => {
    render(<Diagram />);
  })
  test("heading contains correct text", () => {
    render(<Diagram />);
    const text = screen.getByText('Spent time(seconds)');
    expect(text).toBeInTheDocument();
  });
  
  test('button changed data', async () => {
    render(<Diagram />);
    const btn = await screen.getByTestId('changeDataBtn');
    expect(btn).toBeInTheDocument();
  });
})