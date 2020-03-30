import * as React from "react"
import { render } from "@testing-library/react"

import IndexPage from "../index"

describe("IndexPage suite", () => {
  it("IndexPage should render", () => {
    const wrapper = render(<IndexPage />)

    expect(wrapper.container).toMatchSnapshot()
  })
})
