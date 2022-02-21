import Link from 'next/link'

type ButtonProps = {
  value: string,
  link: string
}

const Button = ({ value, link }: ButtonProps) => {
  return (
    <Link href={link}>
      <a style={{color:"blue"}}>{value}</a>
    </Link>
  )

}

export default Button;