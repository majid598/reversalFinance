import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#0077c0] text-white py-10 lg:px-20 md:px-10 px-6">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col items-start border-b-2 pb-10">
          <h1 className="lg:text-2xl md:text-2xl text-xl font-bold mt-5">
            Subscribe to Our Newsletter
          </h1>
          <p className="lg:text-xl md:text-lg text-sm lg:font-semibold md:font-semibold text-white w-3/4 mt-4">
            Join thousands of subscribers in receiving weekly updates about
            Inverse products, partnerships, and early-bird news shared only with
            subscribers!
          </p>
          <button className="lg:text-xl md:text-lg sm:text-lg text-sm lg:px-6 px-3 py-2 mt-5 rounded-md transition-all duration-500 hover:bg-white hover:text-[#0077c0] font-semibold text-white border-2 border-white">
            Subscribe Now
          </button>
        </div>
        <div className="lg:flex md:grid lg:gap-20 md:gap-10 md:grid-cols-4 grid sm:grid-cols-3 grid-cols-2">
          <div className="flex flex-col mt-4">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            {["eERV", "ERV", "DBR", "INV", "FiRM"].map((item, index) => {
              return <Link href={""}>{item}</Link>;
            })}
          </div>
          <div className="flex flex-col mt-4">
            <h2 className="text-xl font-semibold mb-4">Governance</h2>
            {["Voting", "Transparency", "Analytics", "Forum"].map(
              (item, index) => {
                return <Link href={""}>{item}</Link>;
              }
            )}
          </div>
          <div className="flex flex-col mt-4">
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            {[
              "Docs",
              "Audits",
              "Risk Gitbook",
              "Github",
              "Whitepaper",
              "eREV",
              "About FiRM",
              "Brand Assets",
            ].map((item, index) => {
              return <Link href={""}>{item}</Link>;
            })}
          </div>
          <div className="flex flex-col mt-4">
            <h2 className="text-xl font-semibold mb-4">Community</h2>
            {["Blog", "Bug Bounty", "Discord", "Debank", "Newsletter"].map(
              (item, index) => {
                return <Link href={""}>{item}</Link>;
              }
            )}
          </div>
          <div className="flex flex-col mt-4">
            <h2 className="text-xl font-semibold mb-4">Social</h2>
            <div className="flex gap-4">
              {[<FaTwitter />, <FaGithub />, <FaDiscord />].map(
                (item, index) => {
                  return (
                    <Link href={""} className="text-2xl">
                      {item}
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
