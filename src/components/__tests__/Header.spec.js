import Header from "../header";
import React from "react"
import { render } from "@testing-library/react"

test("Displays the correct title", () => {
  const siteTitle = "Punny Title";
  const { getByTestId } = render(<Header siteTitle={siteTitle} />)

  expect(getByTestId("site-title")).toHaveTextContent(siteTitle)
});