import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  console.log(router);

  const menuitems = [
    {
      title: "Home",
      svg:
        "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      url: "/",
    },
    {
      title: "Chi sono",
      svg:
        "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
      url: "/chi-sono-biografia",
    },
    {
      title: "Diario",
      svg:
        "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
      url: "/diario-blog",
    },
    {
      title: "Portfolio",
      svg:
        "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      url: "/portfolio",
    },
    {
      title: "Contatti",
      svg:
        "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
      url: "/contatti",
    },
  ];

  return (
    <section className="bg-brand-100 z-10 border-t sm:border-t-0 border-brand-400 md:mx-auto md:container md:bg-transparent lg:w-2/3 fixed sm:static bottom-0 w-full">
      <div className="flex-row flex space-x-2 pb-2 pt-3 px-3 text-brand-800">
        {menuitems.map((menuitem) => (
          <div className="flex-1">
            <Link href={menuitem.url}>
              <a
                className={
                  router.pathname === menuitem.url
                    ? "sm:flex sm:flex-row sm:w-32 text-brand-400 items-center"
                    : "sm:flex sm:flex-row sm:w-32 transition-colors duration-500 ease-in-out hover:text-brand-400 items-center"
                }
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d={menuitem.svg}
                    />
                  </svg>
                </div>
                <div className="sm:ml-2 items-center hidden sm:block">
                  {menuitem.title}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Navbar;
