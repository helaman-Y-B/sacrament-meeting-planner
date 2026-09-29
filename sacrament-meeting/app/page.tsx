import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <section className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-center">
          Sacrament Meeting Planner
        </h1>
        <picture className="relative block aspect-[2/1] w-full max-w-5xl overflow-hidden rounded-lg">
          <source media="(max-width: 600px)" srcSet="/hero-small.webp" />
          <source media="(max-width: 1000px)" srcSet="/hero-medium.webp" />
          <Image
            src="/hero-large.webp"
            alt="Sacrament Meeting"
            fill
            sizes="(max-width: 600px) 100%, (max-width: 1000px) 90%, 1200px"
            className="object-cover"
            priority
          />
        </picture>
        <p className="text-lg text-center text-gray-600">
          Plan and organize your sacrament meetings with ease. View meeting
          details, speakers, hymns, and more.
        </p>
      </section>
    </main>
  );
}
