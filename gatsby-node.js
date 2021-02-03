const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	const shirtPost = path.resolve(`./src/templates/shirt-post.js`)
	return graphql(
		`
		{
			allContentfulTShirt {
				edges {
					node {
						slug
						title
					}
				}
			}
		}
		`
	).then(result => {
		if (result.errors) {
			throw result.errors
		}

		const tshirts = result.data.allContentfulTShirt.edges

		tshirts.forEach((tshirt, index) => {
			const previous = index === tshirts.length - 1 ? null : tshirts[index + 1].node
			const next = index === 0 ? null : tshirts[index - 1].node

			createPage({
				path: tshirt.node.slug,
				component: shirtPost,
				context: {
					slug: tshirt.node.slug,
					previous,
					next,
				},
			})
		})
	})
}
