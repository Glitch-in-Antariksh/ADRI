import Button from "@/components/Button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <nav className="flex justify-between items-center p-6 border-b border-gray-800">

        <h1 className="text-2xl font-bold">
          ADRI
        </h1>

        <div className="flex gap-6 text-sm">

          <Link href="/About">
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

      <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6">

<h1 className="text-6xl font-bold mb-6">
  ADRI
</h1> 

<p className="text-gray-400 text-xl max-w-2xl mb-8">
  Atreus Defence Research and Innovation
</p>

<p className="text-gray-400 text-xl max-w-2xl mb-8">
  Building next-generation autonomous defence systems and intelligent battlefield technologies.
</p>


<Button text="Explore Projects" />

      </section>

    </main>
  );
}
