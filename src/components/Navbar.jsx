import Link from "next/link"

export default function Navbar({ menu1, menu2 }) {
    return (
    <div className="navbar bg-transparent">
      <div className="flex-1 ml-3">
          <Link className="group/logo text-xl font-bold text-[#eaeaea] hover:scale-125" href="/">Farelt<span className="text-[#c62707] group-hover/logo:animate-rgb-color">Xyz</span></Link>
      </div>
      <div className="flex-none mr-3 flex flex-row space-x-3">
          <Link className="text-[#eaeaea] underline decoration-current hover:scale-90" href={"/" + menu2.toLowerCase()}>{menu2}</Link>
        </div>
    </div>
    )
}