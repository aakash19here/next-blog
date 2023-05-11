import Link from "next/link"
import { FaTwitter, FaGithub, FaInstagram , FaLinkedinIn } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="p-4 sticky top-0 drop-shadow-xl z-10 bg-black">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-2xl font-bold grid place-content-center mb-2 md:mb-0">
            <Link 
            href={"/"}
            className="no-underline text-white/60 hover:text-white"
            >
        aakash19here.com
        </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle items-center mt-2 lg:mt-0 gap-7 text-white text-2xl">
                    <Link className="text-white/60 hover:text-white" href="https://www.twitter.com/aakash19here" target="_blank">
                        <FaTwitter />
                    </Link>
                    <Link className="text-white/60 hover:text-white" href="https://www.github.com/aakash19here" target="_blank">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/60 hover:text-white" href="https://instagram.com/init_aakash" target="_blank">
                        <FaInstagram />
                    </Link>
                    <Link className="text-white/60 hover:text-white" href="https://instagram.com/init_aakash" target="_blank">
                        <FaLinkedinIn />
                    </Link>
                </div>
        </div>
    </nav>
  )
}
