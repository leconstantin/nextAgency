import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { navLinks } from "@/lib/navlinks";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-customgreen">
      <svg
        className="fill-black rotate-180"
        viewBox="0 0 1440 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path>
      </svg>
      <section className="bg-black ">
        <section className="py-7">
          <div className="text-white flex items-center justify-center gap-10">
            <FaXTwitter
              size={25}
              className="hover:text-customgreen ease-in-out duration-500 cursor-pointer"
            />
            <FaLinkedinIn
              size={25}
              className="hover:text-customgreen ease-in-out duration-500 cursor-pointer"
            />
            <FaFacebookF
              size={25}
              className="hover:text-customgreen ease-in-out duration-500 cursor-pointer"
            />
            <FaInstagram
              size={25}
              className="hover:text-customgreen ease-in-out duration-500 cursor-pointer"
            />
          </div>
        </section>
        <section className="py-8">
          <div>
            <ul className="flex items-center justify-center mx-auto text-gray-600 capitalize dark:text-gray-300">
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href}>
                  <li
                    className={`
              text-gray-100 transition-colors duration-300 transform dark:text-gray-200 mx-1  px-1 sm:px-10 rounded-md
              hover:text-customgreen
              `}
                  >
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <p className="text-zinc-100 text-center py-3">
            © 2024 Flash <span className="text-customgreen">er </span>. All
            right reserved.
          </p>
        </section>
      </section>
    </footer>
  );
}
