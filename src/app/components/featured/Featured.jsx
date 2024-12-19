import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Saluts les devs!</b> Découvrez nos derniers articles
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill></Image>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h2>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus quos quibusdam aspernatur nulla cum, ipsum quis. Animi
            quibusdam fuga cum temporibus eius, harum corrupti enim quis aut
            iure sit itaque?
          </p>
          <button className={styles.button}>Lire plus</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
