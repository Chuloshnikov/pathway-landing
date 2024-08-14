import Image from "next/image";
import logo from "../assets/logosaas.png";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
        <div className="container">
            <div className="inline-flex relative element">
                <Image
                className="relative"
                src={logo} 
                height={40} 
                alt="Sass logo"
                />
            </div>

           
            <nav>
                <ul className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Features</Link></li>
                    <li><Link href="#">Customers</Link></li>
                    <li><Link href="#">Pricing</Link></li>
                    <li><Link href="#">Help</Link></li>
                    <li><Link href="#">Careers</Link></li>
                </ul>
            </nav>
            <div className="flex justify-center gap-6 mt-6">
                <FaXTwitter/>
                <FaSquareInstagram/>
                <FaLinkedin/>
                <FaPinterest/>
                <FaYoutube/>
            </div>
            <p className="mt-6">&copy; 2024 Your Company, Inc. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer