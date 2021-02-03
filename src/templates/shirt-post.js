import React, { Component } from 'react'
import { Link, graphql } from "gatsby"

import Layout from '../components/Layout'
import SEO from '../components/seo'

export default class tShirtTemplate extends Component {
    render() {
        const tshirt = this.props.data.contentfulTShirt
        const siteTitle = this.props.data.site.siteMetadata.title
        const { previous, next } = this.props.pageContext

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title={tshirt.title} />
                <h1>{tshirt.title}</h1>


                <ul>
                    <li>
                        {previous && (
                            <Link to={previous.slug} rel="prev">
                                {previous.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.slug} rel="next">
                                {next.title}
                            </Link>
                        )}

                    </li>
                </ul>
            </Layout>

        );
    }
}


export const pageQuery = graphql`
    query tshirtBySlug($slug: String!) {
site {
		siteMetadata {
		title
		}
	}
        contentfulTShirt (slug: {eq: $slug }) {
            title
        }
    }

`

