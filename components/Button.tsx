import Link from 'next/link'
import { FC } from 'react'

type ButtonProps = {
  value: string,
  link: string
}

export const Button:FC<ButtonProps> = ({ value, link }) => {
  return (
    <Link href={link}>
      <a style={{color:"blue"}}>{value}</a>
    </Link>
  )

}