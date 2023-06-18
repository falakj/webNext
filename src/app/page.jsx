import Image from 'next/image';
import styles from './page.module.css';
import Hero from "public/hero.png";
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Amplify the Magic of Design: Elevate Your Digital Presence
        </h1>
        <p className={styles.desc}>
          Our team of skilled designers and strategists excel at creating
          remarkable digital experiences that make a lasting impression.
        </p>
        <Button url="/portfolio" text="Our works." />
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}


