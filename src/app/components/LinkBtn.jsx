import Link from "next/link"

const LinkBtn = ({href, text, classes}) => {
  return (
    <Link href={href} className={`${classes} text-center gap-x-2 bg-main hover:bg-slate-600 transition-colors duration-300 px-10 py-3 rounded-lg text-white`}> {text} </Link>
  )
}

export default LinkBtn