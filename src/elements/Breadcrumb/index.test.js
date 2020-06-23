import Breadcrump from "./index"
import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {render} from "@testing-library/react"

const setup = () => {
  const breadcrumpList = [
    { pageTitle: "home", pageHref: "" },
    {pageTitle:"House Details", pageHref:""}
  ]
  const {container} = render(
    <Router>
      <Breadcrump data={breadcrumpList}/>
    </Router>
  )

  const breadcrumb = container.querySelector(`.breadcrumb`)

  return{
    breadcrumb
  }
}


test("should have <ol> with className .breadcrumb and have text Home & House Details", () => {
  const {breadcrumb} = setup()

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("home")
  expect(breadcrumb).toHaveTextContent("House Details")
})
