import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'


const Portfolio = () => {
  return (
    <div className={styles.container}>

      <div className={styles.items}>
        <Link href="/portfolio/Artworks" className={styles.item}>
          <span className={styles.title}>Artworks</span>
        </Link>

        <Link href="/portfolio/WebDesigns" className={styles.item}>
          <span className={styles.title}>Web Designs</span>
        </Link>

        <Link href="/portfolio/Applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;