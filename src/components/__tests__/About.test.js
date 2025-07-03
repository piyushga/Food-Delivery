import About from "../About";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load About us component", () => {
  render(<About />);
  //Querying
  const heading = screen.getByRole("heading", { level: 1 });
  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load linkedin link inside About us component: ", () => {
  render(<About />);
  const link = screen.getByText("LinkedIn");
  expect(link).toBeInTheDocument();
});

test("Should load all Paragraphs inside About us component: ", () => {
  render(<About />);

  const para = screen.getAllByRole("paragraph");
  expect(para.length).toBe(3);
});
