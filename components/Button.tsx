import Link from 'next/link'
import { FC } from 'react'
import styles from '../styles/Button.module.css'

type ButtonProps = {
  value: string,
  link: string
}

export const Button:FC<ButtonProps> = ({ value, link }) => {
  return (
    <Link href={link}>
      <a className={styles.buttonAnchor}>{value}</a>
    </Link>
  )

}
