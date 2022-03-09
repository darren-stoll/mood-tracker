import Link from 'next/link'
import { useRouter } from 'next/router'

export const Footer = () => {
  const { asPath } = useRouter()

  return (
    <>
      {asPath !== "/" ? 
      <Link href="../">
        <a style={{marginBottom:"50px"}}>Back to main</a>
      </Link>
      : ""}
      <p style={{fontSize:"8pt",color:"gray"}}>Made by: Darren Stoll</p>
    </>
  )
}