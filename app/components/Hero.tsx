import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[420px] w-full flex items-center justify-center mt-10">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="Developer workspace with laptop and notebook"
        fill
        priority
        className="object-cover"
      />

      

      <div className="absolute inset-0 bg-black/40" />

    
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Latest Tech Articles
        </h1>
      </div>
    </section>
  );
}
