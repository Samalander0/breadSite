import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from '../../styles/Header.module.scss'

const Header = ({ slice }) => (
  <header id={styles.header}>
    <div id={styles.innerHeader}>
      <img id={styles.backgroundImage} src={slice.primary.backgroundImage.url}/>
      <img id={styles.titleImage} src={slice.primary.logo.url} alt={slice.primary.logo.alt}/>
      <div>
        <PrismicRichText field={slice.primary.pretitle}/>
        <PrismicRichText field={slice.primary.title}/>
      </div>
    </div>
  </header>
)

export default Header