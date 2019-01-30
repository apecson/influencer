import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.teaser}>
    <Link to={`/blog/${article.slug}`}>
      <Img alt="" fluid={article.heroImage.fluid} />
    </Link>
    <h3 className={styles.teaser__title}>
      <Link className={styles.teaser__link} to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.teaser__date}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    <ul className={styles.tag__list}>
      {article.tags ?
        article.tags.map(tag => {
          return <li key={tag} className={styles.tag__item}>{tag}</li>
        }) : ''
      }
    </ul>
  </div>
)
