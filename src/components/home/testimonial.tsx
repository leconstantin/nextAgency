import { IoStar } from "react-icons/io5";
const people = [
  {
    highlight: "Highest amount of traffic that our site has ever received.",
    rest: "Highest amount of traffic that our site has ever received.",
    name: "Emily Fowler | EZ-Access",
  },
  {
    highlight: "Highest amount of traffic that our site has ever received.",
    rest: "Highest amount of traffic that our site has ever received.",
    name: "Emily Fowler | EZ-Access",
  },
  {
    highlight: "Highest amount of traffic that our site has ever received.",
    rest: "Highest amount of traffic that our site has ever received.",
    name: "Emily Fowler | EZ-Access",
  },
];
const peop = [
  {
    highlight: "Highest amount of traffic that our site has ever received.",
    rest: "Highest amount of traffic that our site has ever received.",
    name: "Emily Fowler | EZ-Access",
  },
  {
    highlight: "Highest amount of traffic that our site has ever received.",
    rest: "Highest amount of traffic that our site has ever received.",
    name: "Emily Fowler | EZ-Access",
  },
];
export default function People() {
  return (
    <main>
      <div className="py-16 min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-black">
        <div className="pb-20">
          <h1 className="text-center text-6xl font-semibold tracking-tight">
            What people we supported say
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 font-sans">
          {people.map((person, index) => (
            <div key={index}>
              <p className="text-zinc-800 text-lg tracking-tighter">
                <span className="text-customgreen font-semibold tracking-tighter">
                  "{person.highlight}
                </span>{" "}
                <span>"{person.rest}. </span>
              </p>
              <div>
                <p className="text-gray-950 font-bold py-2">{person.name}</p>
                <div className="flex gap-2 text-yellow-500 ease-in-out duration-300">
                  <IoStar size={17} />
                  <IoStar size={17} />
                  <IoStar size={17} />
                  <IoStar size={17} />
                  <IoStar size={17} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-16  gap-14 font-sans">
          {peop.map((item, index) => (
            <div className="max-w-72" key={index}>
              <p className="text-zinc-800 text-lg tracking-tighter">
                <span className="text-customgreen tracking-tighter font-semibold">
                  "{item.highlight}.
                </span>{" "}
                <span>"{item.rest}. </span>
              </p>
              <div>
                <p className="text-gray-950 font-bold py-2">{item.name}</p>
                <div className="flex gap-2  text-yellow-500 ease-in-out duration-300">
                  <IoStar size={17} />
                  <IoStar size={17} />
                  <IoStar size={17} />
                  <IoStar size={17} />
                  <IoStar size={17} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
