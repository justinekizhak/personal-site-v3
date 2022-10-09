import { Component } from "solid-js"
import { lazy } from "solid-js"
import { Routes, Route } from "@solidjs/router"
import DefaultLayout from "./layouts/default"
import Header from "./components/Header"

const Homepage = lazy(() => import("./pages/home"))
const ProjectDetails = lazy(() => import("./pages/projects/details"))
const AboutMe = lazy(() => import("./pages/about-me"))
const ContactMe = lazy(() => import("./pages/contact-me"))
const ProjectList = lazy(() => import("./pages/projects"))

const App: Component = () => {
  return (
    <DefaultLayout>
      <Header />
      <Routes>
        <Route path="/" component={Homepage} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/projects/:project-id" component={ProjectDetails} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/contact-me" component={ContactMe} />
      </Routes>
    </DefaultLayout>
  )
}

export default App
