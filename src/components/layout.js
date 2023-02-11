/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from "./Hero"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="main-wrapper">
		<nav className="nav">
			<p>nav</p>
			<p>nav</p>
			<p>nav</p>
		</nav>
		<div className="main-container">
			<section className="section hero">
				<Hero />
			</section>
		</div>
    </div>
  )
}

export default Layout
