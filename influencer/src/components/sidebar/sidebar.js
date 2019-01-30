import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styles from './sidebar.module.css'
import classnames from 'classnames';

class Sidebar extends React.Component {
    render() {
        // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        // const posts = get(this, 'props.data.allContentfulBlogPost.edges')

        return (
            <div className={classnames(styles.sidebar, 'col-md-4')}>

            </div>
        )
    }
}

export default Sidebar

// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//   }
// `
