import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Memoir Crafters.</h1>
          <h2 className={styles.imgDesc}>
            Designing Experiences, Weaving Digital Stories
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit maiores consequatur magnam, sequi illum aut natus ipsa
            facilis at earum.
            <br />
            <br />
            Amet corporis ipsa excepturi magni ipsum deserunt aspernatur
            inventore maxime?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit maiores consequatur magnam, sequi illum aut natus ipsa
            facilis at earum.
            <br />
            <br />
            Amet corporis ipsa excepturi magni ipsum deserunt aspernatur
            inventore maxime?
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;