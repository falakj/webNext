import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';


const Footer = () => {
  return (
    <div>
      <div className={styles.container}>&copy; 2023 webNext. All rights reserved.
      
      <div className={styles.social}>
        <Image src="/1.png" width={20} height={20} className={styles.icon} alt="FalakZ" />
        <Image src="/2.png" width={20} height={20} className={styles.icon} alt="FalakZ" />
        <Image src="/3.png" width={20} height={20} className={styles.icon} alt="FalakZ" />
        <Image src="/4.png" width={20} height={20} className={styles.icon} alt="FalakZ" />
      </div>
      </div>
      </div>
  );
};

export default Footer