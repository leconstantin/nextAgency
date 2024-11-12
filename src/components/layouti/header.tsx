import Link from "next/link";
import NavItem from "./navitem";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#0f1825] shadow dark:bg-gray-800 py-10 px-5 md:px-10">
      <div>
        <Link href="/">
          <h1 className="text-xl font-semibold md:text-[25px] space-x-1 tracking-tight bg-gradient-to-b from-blue-200 via-gray-200 to-gray-300 text-transparent bg-clip-text ">
            <span>Flash</span>
            <span className="font-serif text-customgreen">er</span>
          </h1>
        </Link>
      </div>
      <div>
        <NavItem />
      </div>

      <div className="hidden sm:flex lg:hidden xl:flex">
        <Link href="/admission">
          <span className="bg-[#7aff87] px-3 py-2 rounded-lg text-white tracking-tight font-semibold cursor-pointer hover:from-blue-600">
            Get a Proposal
          </span>
        </Link>
      </div>
    </header>
  );
}
