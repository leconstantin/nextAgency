export default function Hero() {
  return (
    <section className="bg-customback pt-20 px-[40px] ">
      <div className="pb-8">
        <h1 className="text-[45px] text-balance lg:text-6xl tracking-wider flex flex-col gap-1 md:gap-5 py-5">
          <span>Get a beautiful website</span>
          <span>that drives revenue</span>
        </h1>
        <p className="pt-8 pb-4 text-lg leading-8 tracking-tight text-zinc-400 max-w-xl">
          We help services business owners like you nail the website that will
          clarify your message , generate more clients and amplify your profits.
        </p>
        <p className="text-lg leading-8 tracking-tight text-zinc-400 max-w-xl">
          As your partner, we treat your website like it&apos;s our own
        </p>
      </div>
      <div className="flex flex-1 gap-6">
        <div className="bg-customgreen px-4 py-5 rounded-md text-xl text-black font-semibold">
          Get a proposal
        </div>
        <div className="bg-white px-11 py-5 rounded-md text-xl text-black font-semibold">
          Hire us
        </div>
      </div>
    </section>
  );
}
