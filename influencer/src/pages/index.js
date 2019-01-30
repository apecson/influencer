import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import classnames from 'classnames'

import Hero from '../components/hero/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview/article-preview'
import Sidebar from '../components/sidebar/sidebar'

import styles from './styles.module.css';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={siteTitle} />
          <div className="wrapper row">
            <ul className={classnames('article-list', 'col-md-8')}>
              {posts.map(({ node }, i) => {
                return (
                  <li key={node.slug} className="teaser">
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
            <Sidebar />
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
          allContentfulBlogPost(sort: {fields: [publishDate], order: DESC }) {
          edges {
        node {
          title
          slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
          heroImage {
          fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        }
          description {
          childMarkdownRemark {
        html
      }
    }
  }
}
}
    allContentfulPerson(filter: {contentful_id: {eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
          edges {
        node {
          name
          shortBio {
          shortBio
        }
        title
          heroImage: image {
          fluid(
            maxWidth: 1180
    maxHeight: 480
    resizingBehavior: PAD
    background: "rgb:000000"
            ) {
          ...GatsbyContentfulFluid_tracedSVG
        }
        }
      }
    }
  }
}
`
