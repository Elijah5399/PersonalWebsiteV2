import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="h-12 bg-inherit fixed top-0">
        <ul className="list-none flex flex-row pt-8 pl-6">
          <li className="flex-initialflex justify-center">
            <Link
              href="/"
              className="text-2xl text-emerald-500 hover:text-emerald-700 font-bold ml-6 mr-6"
            >
              {"<Elijah/>"}
            </Link>
          </li>
          <li className="flex-initial flex justify-center">
            <Link
              href="/"
              className="text-2xl text-emerald-500 hover:text-emerald-700 font-light underline decoration-emerald-500 ml-6 mr-6"
            >
              Home
            </Link>
          </li>
          <li className="flex-initial flex justify-center">
            <Link
              href="/"
              className="text-2xl text-emerald-500 hover:text-emerald-700 font-light ml-6 mr-6"
            >
              About Me
            </Link>
          </li>
          <li className="flex-initial flex justify-center">
            <Link
              href="/"
              className="text-2xl text-emerald-500 hover:text-emerald-700 font-light ml-6 mr-6"
            >
              Projects
            </Link>
          </li>
          <li className="flex-initial flex justify-center">
            <Link
              href="/"
              className="text-2xl text-emerald-500 hover:text-emerald-700 font-light ml-6 mr-6"
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
