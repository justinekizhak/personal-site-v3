import { Route, Routes } from "@solidjs/router"
import { Component, lazy } from "solid-js"
import Header from "./components/Header"
import DefaultLayout from "./layouts/default"

const Homepage = lazy(() => import("./pages/home"))
const ProjectDetails = lazy(() => import("./pages/projects/details"))
const AboutMe = lazy(() => import("./pages/about-me"))
const ContactMe = lazy(() => import("./pages/contact-me"))
const ProjectList = lazy(() => import("./pages/projects"))

const App: Component = () => {
  return (
    <div class="h-screen">
      <Header />
      <DefaultLayout>
        <Routes>
          <Route path="/" component={Homepage} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/projects/:project-id" component={ProjectDetails} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/contact-me" component={ContactMe} />
        </Routes>
      </DefaultLayout>
    </div>
  )
}

export default App
