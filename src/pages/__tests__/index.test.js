import * as React from "react"
import { render } from "@testing-library/react"

import Home from "../index"

describe("GificHome suite", () => {
  it("GificHome should render required props and children", () => {
    const wrapper = render(<Home />)

    expect(wrapper.container).toMatchSnapshot()
  })
})
