import React, { Component } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Diagram from "./Diagram";

test("Header contains correct text", () => {
  render(<Diagram />);
  const text = screen.getByText('Spent time(seconds)');
  expect(text).toBeInTheDocument();
});

test('button changed data', async () => {
  render(<Diagram />);
  const btn = await screen.getByTestId('changeDataBtn');
  expect(btn).toBeInTheDocument();
});