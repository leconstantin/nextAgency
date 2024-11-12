import Image from "next/image";
export default function AboutHero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          &quot;website performance is a global issue that impacts businesses
          everywhere&quot;
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          That&apos;s why we created this agency to help businesses eliminate
          slow websites and build ones that grow with them.By ensuring your site
          not only works seamlessly today but is also ready for tomorrow.
        </p>
        <p className="font-bold text-xl">Muhirwe leo Constantin, Founder</p>
      </div>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image
          src="/me.jpeg"
          alt="Founder"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
