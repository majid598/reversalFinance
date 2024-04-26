import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Link = ({ href, children }) => <a href={href}>{children}</a>;

const Header = () => {
  //   const location = useLocation()
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);
  //   const pathName = usePathname();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "#",
    },
    {
      name: "eREV",
      path: "#",
    },
    {
      name: "Governance",
      path: "#",
    },
    {
      name: "Transparency",
      path: "#",
    },
    {
      name: "More",
      path: "#",
    },
  ];
  console.log(isMobile);
  return (
    <header className="w-full">
      <div className="w-full head hidden h-20 shadow justify-between px-12">
        <div className="text-5xl font-extrabold overflow-hidden h-full">
          <img
            src={"/assets/logo.png"}
            className="invert h-full object-center object-cover"
            alt="logo"
            width={170}
            height={100}
          />
        </div>
        <button onClick={() => setIsMobile(true)} className="text-3xl">
          <IoMdMenu />
        </button>
      </div>
      <nav
        className={`w-full h-28 header transition-all duration-700 z-[999] flex items-center shadow px-20 justify-between ${
          isMobile ? "active" : ""
        }`}
      >
        <div className="text-5xl logo font-extrabold overflow-hidden h-full">
          <img
            src={"/assets/logo.png"}
            className="invert h-full scale-125 object-center object-cover"
            alt="logo"
            width={170}
            height={100}
          />
        </div>
        <button
          onClick={() => setIsMobile(false)}
          className="text-3xl text-white btn hidden absolute top-4 right-4"
        >
          {" "}
          <IoMdClose />{" "}
        </button>
        <div className="ext hidden"></div>
        <div className="links flex items-center gap-3">
          {links.map((link) => (
            // <div className="font-semibold text-xl text-red-500">
              <Link to="/" className="text-red-500">Home</Link>
            // </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
