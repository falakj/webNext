import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Button from '@/components/Button/Button';


export const metadata = {
  title: "Contact Page",
  description: "This is contact page.",
};


const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/cont.png"
            alt=""
            fill={true}
            className={styles.image}
          />

        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea placeholder="Message" className={styles.textArea} cols="30" rows="10"></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

