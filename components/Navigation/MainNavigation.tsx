import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const navigationLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function MainNavigation() {
  return (
    <nav className="text-white flex items-center h-full">
      <div className="container">
        <div className=" flex justify-between items-center">
          <div className="flex justify-start items-center gap-4">
            <Link href="/">
              <Image
                src="/logo.svg"
                width={30}
                height={30}
                alt="wavystyle logo"
                priority
                style={{ height: "auto" }}
              />
            </Link>
            <span>|</span>
            <ul className="flex justify-between items-center gap-4">
              {navigationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="opacity-50 hover:opacity-85 text-sm underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex items-center gap-8">
            <li>
              <a target="_blank" href="https://x.com/_wavystyle_">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/roman-feliz">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
