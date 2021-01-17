import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Header() {
  return (
    <header className="">
      <div className="px-2 pb-10 pt-8 ">
        <div className="mx-auto">
          <Link href="/">
            <a>
              <img
                src="/luca-pellizzaro-monogram.svg"
                className="h-20 w-full"
              ></img>
            </a>
          </Link>
        </div>
      </div>

      <Navbar />

      <div>
        <div>
          <img className="transform rotate-180" src="/cornice.svg"></img>
        </div>
      </div>
    </header>
  );
}
