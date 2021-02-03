import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
	render() {
		const { data } = this.props
		const siteTitle = data.site.siteMetadata.title
		const tshirts = data.allContentfulTShirt.edges

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO
					title="All T-Shirts"
					keywords={[`blog`, `gatsby`, `javascript`, `react`]}
				/>
				{tshirts.map(({ node }) => {
					const title = node.title || node.slug
					return (
						<div key={node.slug}>
							<h3>
								<Link to={node.slug}>
									{title}
								</Link>
							</h3>
						</div>
					)
				})}
			</Layout>
		)
	}
}

export default IndexPage

export const pageQuery = graphql`
query {
	site {
		siteMetadata {
		title
		}
	}
	allContentfulTShirt {
		edges {
		node {
		title
		slug
	}	
  }
}
}`

