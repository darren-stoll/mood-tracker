import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  const { asPath } = useRouter()

  return (
    <>
      {asPath !== "/" ? 
      <Link href="../">
        <a className={styles.return}>Back to main</a>
      </Link>
      : ""}
      <p className={styles.madeby}>Made by: Darren Stoll</p>
    </>
  )
}
