import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my website</h1>
    <p>This is a sample site for the Gatsby Crash Course</p>
  </Layout>
)

export default IndexPage