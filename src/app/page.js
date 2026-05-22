import Button from "@/components/Button";
import Link from "next/link";
import Footer from "@/components/Footer";
export default function Home() {
  
const rings = [];
let radius = 1500;
let gap = 25;
for (let i = 0; i < 22; i++) {
  rings.push(radius);

  radius -= gap;

  gap += 5;
}

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
}));

const colors = [
  "border-cyan-400/20",
  "border-blue-400/20",
  "border-purple-400/20",
];

  return (
    <main className="bg-black text-white min-h-screen">

      <nav className="flex justify-between items-center p-6">

        <h1 className="text-2xl font-bold">
          ADRI
        </h1>

        <div className="flex gap-6 text-sm">

          <Link href="/about">
            About
          </Link>
          <Link href="/research">
            Research
          </Link>
          <Link href="/projects">
            Projects
          </Link>
          <Link href="/team">
            Team
          </Link>

        </div>

      </nav>

      <section
  className="
    relative
    overflow-hidden
    min-h-screen
    flex
    flex-col
    items-center
    justify-center
    text-center
    px-6
  "
>
   {stars.map((star) => (
    <div
      key={star.id}
      className="
        star 
        absolute
        w-[3px]
        h-[4px]
        rounded-full
        bg-white
        opacity-70
        shadow-[0_0_8px_white]
      "
      style={{
        top: `${star.top}%`,
        left: `${star.left}%`,
      }}
    />
  ))}

    <div className="relative mb-16 flex items-center justify-center">

  {/* radar glow */}
  <div className="
    absolute
    w-[500px]
    h-[500px]
    rounded-full
    bg-cyan-500/10
    blur-[120px]
  "></div>

  <div className="
    absolute
    w-[350px]
    h-[350px]
    rounded-full
    bg-purple-500/10
    blur-[100px]
  "></div>

  {/* radar sweep */}
  <div className="radar-sweep"></div>

  {rings.map((size, index) => (
    <div
      key={index}
      className={`
        absolute
        rounded-full
        border-2
        ${colors[index % 3]}
        shadow-[0_0_10px_rgba(255,255,255,0.05)]
        hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
        transition-all
        duration-500
      `}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  ))}

  <h1
    className="
      relative
      z-10
      text-[14rem]
      font-extrabold
      tracking-[0.25em]
      text-white
      drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]
    "
  >
    ADRI
  </h1>

</div>

<p className="text-gray-400 text-xl max-w-2xl mb-8">
  Atreus Defence Research and Innovation
</p>

<p className="text-gray-400 text-xl max-w-2xl mb-8">
  Building next-generation autonomous defence systems and intelligent battlefield technologies.
</p>
      </section>

    <Footer />
    </main>
  );
}
