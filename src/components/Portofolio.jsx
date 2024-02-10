import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5"
import Link from "next/link";
export default function Portofolio() {
    return (
        <>
           <div className="grid grid-cols-1 md:grid-cols-2 h-48 w-full px-12 pb-0">
            <div className="">
             <h1 className="text-[#eaeaea] font-extrabold text-xl">
              Hello!, I'm Farel
             </h1>
             <p className="text-[#a0a0a0]">I&apos;m a self-taught programmer, I started learning programming "since 2021".  I currently live in Indonesia, more specifically in East Java, Jombang.  I learned a lot about programming such as node js, python, html, css, next js, and express js. I'm currently learning about react.js and next.js</p>
            
           <div className="h-16 w-full flex items-center flex-row mt-5 space-x-2">
              <Link href="https://github.com/FareltXyz/"><FaSquareGithub className="text-4xl text-[var(--txt2)] hover:scale-90 hover:text-[var(--txt)]"/></Link>
              <Link href="https://www.instagram.com/ffarel8975/"><FaSquareInstagram className="text-4xl text-[var(--txt2)] hover:scale-90 hover:text-[var(--txt)]"/></Link>
              <Link href="https://discordapp.com/users/823379272127348796"><IoLogoDiscord className="text-4xl text-[var(--txt2)] hover:scale-90 hover:text-[var(--txt)]"/></Link>
           </div>
            </div>
           </div>
        </>
    )
}