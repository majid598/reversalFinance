import { GoArrowUpRight } from "react-icons/go";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Home = () => {
  const boxes = [
    {
      logo: "/assets/borrow.png",
      heading: "Borrow",
      text: "Access REV with a fixed-rate option for an indefinite duration using REV Borrowing Rights.",
      buttonText: "I want to Borrow",
    },
    {
      logo: "/assets/earn.png",
      heading: "Earn",
      text: "Generate attractive returns by providing liquidity to various trading pairs on platforms like Curve, Convex, and Balancer.",
      buttonText: "I want to Earn",
    },
    {
      logo: "/assets/stake.png",
      heading: "Experience Real Yield",
      text: "Acquire tokens and stake them, to earn real yield through, directly benefiting yourself. Engage in Governance.",
      buttonText: "I want to Stake INV",
    },
  ];
  const stats = [
    {
      title: "REV Circulation",
      value: "108.55M",
    },
    {
      title: "REV 24h Vol.",
      value: "4.86M",
    },
    {
      title: "INV price",
      value: "48.8",
    },
    {
      title: "TVL",
      value: "74.56M",
    },
  ];
  return (
    <div className="w-full bg-zinc-200 relative overflow-x-hidden">
      <Header />
      <div className="w-full lg:h-[calc(100vh-7rem)] md:h-[calc(100vh-7rem)] h-screen flex lg:px-20 md:px-20 px-10 relative">
        <div className="w-full flex relative z-50 h-full items-center justify-center flex-col text-center">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-[#0077c0]">
            Rethink your <br />
            Borrowing Strategy.
          </h2>
          <h5 className="font-semibold mt-5 text-zinc-700">
            REV Borrowing Rights introduces a new paradigm by replacing interest
            rates with <br className="lg:block hidden" /> a fixed fee that can
            potentially yield higher returns.
          </h5>
          <div className="flex mt-16 lg:gap-8 gap-4">
            <button className="lg:px-6 px-3 py-2 lg:text-lg md:text-lg sm:text-lg text-sm rounded-md transition-all duration-500 bg-[#0077c0] hover:bg-[#003b5f] hover:border-[#003b5f] text-white lg:font-bold font-semibold border-2 border-[#0077c0]">
              Enter app
            </button>
            <button className="lg:px-6 px-3 py-2 lg:text-lg md:text-lg sm:text-lg text-sm flex items-center gap-2 rounded-md transition-all duration-500 hover:bg-[#0077c0] hover:text-white text-[#0077c0] lg:font-bold font-semibold border-2 border-[#0077c0]">
              Learn more <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
      <div className="lg:px-20 md:px-20 px-10 py-10 flex flex-col lg:w-2/3 md:w-2/3 w-full mx-auto items-center">
        <span className="lg:text-9xl text-7xl  font-extrabold text-[#0077c0]">
          0%
        </span>
        <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold text-[#0077c0] mt-10 text-center">
          Say Goodbye to Interest Fees
        </h1>
        <h3 className="lg:text-xl md:text-lg sm:text-lg text-sm text-zinc-800 font-semibold mt-10 text-center">
          Traditional interest rates can be unpredictable and unsustainable{" "}
          <br /> for long-term borrowers.
        </h3>
        <h4 className="lg:text-xl md:text-lg sm:text-lg text-sm font-semibold text-zinc-600 mt-8 text-center">
          REV Borrowing Rights (REVs) empower you to lock in a fixed rate today{" "}
          <br /> and borrow later, offering stability and predictability.
        </h4>
        <div className="flex mt-16 lg:gap-8 gap-4">
          <button className="lg:px-6 px-3 py-2 lg:text-lg md:text-lg sm:text-lg text-sm rounded-md transition-all duration-500 bg-[#0077c0] hover:bg-[#003b5f] hover:border-[#003b5f] text-white lg:font-bold font-semibold border-2 border-[#0077c0]">
            Enter app
          </button>
          <button className="lg:px-6 px-3 py-2 lg:text-lg md:text-lg sm:text-lg text-sm flex items-center gap-2 rounded-md transition-all duration-500 hover:bg-[#0077c0] hover:text-white text-[#0077c0] lg:font-bold font-semibold border-2 border-[#0077c0]">
            Learn more <GoArrowUpRight />
          </button>
        </div>
      </div>
      <div className="w-full !lg:h-[calc(100vh-10rem)] lg:p-28 lg:px-20 px-10 py-10">
        <div className="w-full flex lg:flex-row lg:items-center lg-flex-col h-full gap-10">
          <div className="lg:w-1/2 w-full h-full lg-w-full flex flex-col">
            <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold text-[#0077c0] lg-text-center">
              Introducing eREV
            </h1>
            <h3 className="lg:text-xl md:text-lg sm:text-lg text-sm font-semibold mt-4 text-zinc-800 lg-text-center lg:text-start md:text-start text-center">
              Unlock the Power of Inverse's New Yield-bearing Stablecoin
            </h3>
            <ul className="mt-10 text-zinc-600 tracking-tighter flex flex-col gap-2">
              <li className="list-disc list-inside lg:text-2xl md:text-xl lg-text-xxl sm-text-sm lg:font-semibold md:font-semibold">
                Enjoy an APY of 11.45% (expected to rise to 14.88%)
              </li>
              <li className="list-disc list-inside lg:text-2xl md:text-xl lg-text-xxl sm-text-sm lg:font-semibold md:font-semibold">
                100% Organic Yield, Straight from the Blockchain
              </li>
              <li className="list-disc list-inside lg:text-2xl md:text-xl lg-text-xxl sm-text-sm lg:font-semibold md:font-semibold">
                Completely Decentralized, No Third-party Custodians
              </li>
              <li className="list-disc list-inside lg:text-2xl md:text-xl lg-text-xxl sm-text-sm lg:font-semibold md:font-semibold">
                Withdraw Your Funds Anytime, Penalty-free
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full h-full lg-w-full">
            <video
              src="https://www.inverse.finance/sDOLA.mp4#t=0.1"
              controls
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-10 lg:px-20">
        <h4 className="lg:text-4xl md:text-4xl text-2xl lg:px-12 px-10 text-[#0077c0] text-center lg:tracking-normal md:tracking-normal tracking-tighter font-bold mt-2">
          Give Reversal Economics <br className="lg:block md:block hidden" /> a
          go Let our protocol help you out.
        </h4>
        <div className="flex flex-wrap justify-center lg:gap-10 md:gap-10 sm:gap-4 mt-10">
          {boxes.map((box) => (
            <div
              key={box.heading}
              className="lg:w-[24rem] md:w-[24rem] sm:w-[24rem] w-full flex flex-col justify-center items-center p-5"
            >
              <div className="w-full py-4">
                <img
                  src={box.logo}
                  className="mx-auto w-[8rem]"
                  alt="Image can't load"
                />
              </div>
              <h1 className="text-3xl lg-text-3xl text-[#0077c0] font-semibold text-center">
                {box.heading}
              </h1>
              <div
                className="w-full lg:h-2/5"
              >
                <p className="text-xl mb-8 px4 lg-text-xl text-zinc-500 font-semibold tracking-tight mt-5 text-center">
                  {box.text}
                </p>
              </div>
              <button className="mx-auto mt-5 border-2 md:px-4 px-3 border-[#0077c0] text-[#0077c0] hover:bg-[#0077c0] hover:text-white transition-all duration-500 font-semibold text-xl lg:px-4 py-2 rounded-md">
                {box.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      <h1 className="lg:text-4xl md:text-4xl text-2xl w-full text-center font-bold mt-12 text-[#0077c0]">
        Meet Our Security Partners
      </h1>
      <div className="w-full lg:px-40 pb-20 md:px-20">
        <div className="w-full h-1/3 lg:px-20 md:px-20 px-4 pt-20">
          <div className="flex w-full">
            <div className="w-1/2 text-center flex flex-col">
              <span className="text-5xl font-bold text-[#0077c0]">5</span>
              <h2 className="text-xl font-semibold text-[#0077c0] mt-4">
                External Audits
              </h2>
            </div>
            <div className="w-1/2 text-center">
              <span className="text-5xl font-bold text-[#0077c0]">91%</span>
              <h1 className="text-xl font-semibold text-[#0077c0] mt-4">
                DeFiSafety Score
              </h1>
            </div>
          </div>
          <p className="lg:text-xl font-semibold text-zinc-800 mt-6 text-center lg:px-20 md:px-20 px-4">
            Security is our top priority, and we've designed our platform with
            this in mind. Now, we're reinforcing it further with the assistance
            of third-party security experts.
          </p>
          <p className="lg:text-xl font-semibold text-zinc-500 mt-5 text-center lg:px-20 md:px-20 px-4">
            We understand the significance of security, especially in the realm
            of new lending protocols. Explore our audit reports or collaborate
            with us as we expand our third-party security initiatives.
          </p>
        </div>
        <div className="w-1/2 h-full px-5"></div>
      </div>
      <div className="w-full justify-between lg:flex-row md:flex-row flex-col flex mt-12 lg:p-20 md:p-20 py-10 px-5 items-center bg-[#0077c0] text-white">
        <h2 className="lg:text-2xl md:text-xl lg:text-start md:text-start text-center lg:font-semibold md:font-semibold">
          Reversal Economics welcomes developers and security researchers to{" "}
          <br />
          explore our GitHub repositories and earn bug bounty rewards.
        </h2>
        <button className="lg:px-5 px-3 py-2 rounded-md border-2 border-white transition-all lg:mt-0 md:mt-0 mt-6 duration-500 hover:bg-white hover:text-[#0077c0] font-semibold">
          Bug Bounty Program
        </button>
      </div>
      <div className="w-full p-20 px-40">
        <div className="w-full flex flex-col items-center">
          <div>
            <h1 className="lg:text-4xl md:text-4xl text-2xl text-center font-bold text-[#0077c0]">
              The Stats
            </h1>
            <h4 className="lg:text-xl font-semibold mt-5 text-zinc-500 text-center">
              Inverse Finance DAO operates unmatched transparency into its
              operation and governance
            </h4>
          </div>
          <button className="lg:px-8 md:px-5 px-3 py-2 mt-6 rounded-md border-2 border-[#0077c0] hover:bg-[#0077c0] font-bold text-xl text-[#0077c0] hover:text-white transition-all duration-500 ">
            DAO Analytics
          </button>
        </div>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 justify-center gap-6 mt-20">
          {stats.map((state) => (
            <div
              key={state.title}
              className="w-full flex flex-col gap-4 items-center bg-white rounded-md p-5 px-6 text-center"
            >
              <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-[#0077c0]">
                ${state.value}
              </h1>
              <h3 className="lg:text-xl md:text-xl sm:text-lg text-sm font-semibold text-zinc-500 tracking-tight">
                {state.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:px-20 px-10 py-10 pb-24">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold text-[#0077c0] lg:text-start text-center">
            Building and Governing in one{" "}
          </h1>
          <button className="lg:px-5 px-3 py-2 mt-8 rounded-md border-2 text-[#0077c0] border-[#0077c0] transition-all duration-500 hover:bg-[#0077c0] hover:text-white font-semibold">
            DAO Transparency
          </button>
        </div>
        <div className="w-full flex mt-10 lg:flex-row lg-items-center">
          <div className="w-full text-center flex flex-col justify-center">
            <p className="lg:text-xl font-semibold text-center text-zinc-800">
              At Reversal Economics, we leverage 100% on-chain voting, avoiding
              the pitfalls associated with centralized DAO governance.
            </p>
            <p className="lg:text-xl font-semibold text-center text-zinc-500 mt-5">
              We're committed to transparency, offering unparalleled levels of
              operational visibility in DeFi.
            </p>
            <div className="flex gap-3 mt-8 justify-center">
              <button className="lg:px-6 px-3 py-2 lg:text-lg md:text-lg sm:text-lg text-sm rounded-md transition-all duration-500 bg-[#0077c0] hover:bg-[#003b5f] hover:border-[#003b5f] text-white font-semibold border-2 border-[#0077c0]">
                Join our Discord
              </button>
              <button className="lg:px-6 px-3 py-2 lg:text-lg md:text-lg sm:text-lg text-sm flex items-center gap-2 rounded-md transition-all duration-500 hover:bg-[#0077c0] hover:text-white text-[#0077c0] font-semibold border-2 border-[#0077c0]">
                View Proposals
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
