import { Component, createEffect, createResource, onMount } from "solid-js"
import { lazy } from "solid-js"
import { Routes, Route } from "@solidjs/router"
import { projectsListData } from "./hooks/fetchData"

const Homepage = lazy(() => import("./pages/home"))
const ProjectDetails = lazy(() => import("./pages/project-details"))
const AboutMe = lazy(() => import("./pages/about-me"))
const ContactMe = lazy(() => import("./pages/contact-me"))

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Homepage} />
      <Route path="/projects/:project-id" component={ProjectDetails} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/contact-me" component={ContactMe} />
    </Routes>
  )
}

export default App
