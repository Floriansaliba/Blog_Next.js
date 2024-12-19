'use client';
import React, { useState } from 'react';
import styles from './authLinks.module.css';
import Link from 'next/link';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  //temporary
  const status = 'notauthenticated';

  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href={'/login'} className={styles.link}>
          Connexion
        </Link>
      ) : (
        <>
          <Link href={'/Rediger'} className={styles.link}>
            Rédiger
          </Link>
          <span className={styles.link}>Déconnexion</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <>
          <div className={styles.responsiveMenu}>
            <Link href={'/'}>Accueil</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Contact</Link>
            {status === 'notauthenticated' ? (
              <Link href={'/login'}>Connexion</Link>
            ) : (
              <>
                <Link href={'/Rediger'}>Rédiger</Link>
                <span className={styles.link}>Déconnexion</span>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default AuthLinks;
