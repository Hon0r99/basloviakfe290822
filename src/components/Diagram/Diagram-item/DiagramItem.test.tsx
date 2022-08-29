import React from "react";
import { render, screen } from "@testing-library/react";
import DiagramItem, { DiagramItemPropsI } from "./DiagramItem";

const data: DiagramItemPropsI = { name: "Landing Page", prevItemPercent: 30, percent: 20 };

describe('DiagramItem component', () => {
  test('List renders', () => {
    render(<DiagramItem key={data.name} name={data.name} prevItemPercent={data.prevItemPercent} percent={data.percent}></DiagramItem>);
    expect(screen.getByText('Landing Page')).toBeInTheDocument();
  })

  test('DiagramItem name', () => {
    render(<DiagramItem key={data.name} name={data.name} prevItemPercent={data.prevItemPercent} percent={data.percent}></DiagramItem>);
    const text = screen.getByText(data.name);
    expect(text).toBeInTheDocument();
  })

  test('DiagramItem width', () => {
    render(<DiagramItem key={data.name} name={data.name} prevItemPercent={data.prevItemPercent} percent={data.percent}></DiagramItem>);
    const viewColored = screen.getByTestId('viewColored')
    expect(getComputedStyle(viewColored).width).toBe(data.percent + 'px')
  })

  test('DiagramItem left', () => {
    render(<DiagramItem key={data.name} name={data.name} prevItemPercent={data.prevItemPercent} percent={data.percent}></DiagramItem>);
    const viewColored = screen.getByTestId('viewColored')
    expect(getComputedStyle(viewColored).left).toBe(data.prevItemPercent + 'px')
  })
})
