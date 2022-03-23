import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Copyright 2015-2022 <img src="/AILOGO.svg" alt="AI Logo" className={styles.logo} /> All Rights Reserved.
      </footer>
    </>
  )
}
