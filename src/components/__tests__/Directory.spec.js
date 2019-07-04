import { PureDirectory as Directory } from "../Directory"
import React from "react"
import { render } from "@testing-library/react"

describe("Directory", () => {

  const firstGroup = {
    fieldValue: "Springfield",
    edges: [
      {
        node: {
          id: "1",
          name: "Moe's Tavern"
        }
      }
    ]
  };
  const secondGroup = {
    fieldValue: "Quahog",
    edges: [
      {
        node: {
          id: "2",
          name: "The Drunken Clam"
        }
      },
      {
        node: {
          id: "3",
          name: "Pawtucket Brewery"
        }
      }
    ]
  };

  const data = {
    allContentfulPlace: {
      group: [firstGroup, secondGroup]
    }
  };

  it("renders a list item for every city", () => {
    const { getByText } = render(<Directory data={data} />)

    expect(getByText(firstGroup.fieldValue)).toBeDefined();
    expect(getByText(secondGroup.fieldValue)).toBeDefined();
  });

  it("renders a list item for the name of every place under its city", () => {
    const { getByText } = render(<Directory data={data} />)

    data.allContentfulPlace.group.forEach(group => {
      group.edges.forEach(edge => {
        expect(getByText(edge.node.name)).toBeDefined();
      })
    })
  });
});