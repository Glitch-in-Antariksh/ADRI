import Link from "next/link";

export default function Projects() {
  return (
    <main className="bg-black text-white min-h-screen px-12 py-20">

      <h1 className="text-5xl font-bold mb-4">
        PROJECTS
      </h1>

      <p className="text-gray-400 text-xl max-w-4xl mb-12">
       ADRI's projects are driven by a simple objective: transform ambitious ideas into working systems. From UAV development and aerial autonomy to AI-powered surveillance and terrain analysis, each initiative serves as a practical step toward building the technologies of tomorrow.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

        <Link href="/projects/adri-x">
          <div className="
            border border-cyan-500/20
            rounded-2xl
            p-8
            hover:border-cyan-400
            hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
            transition-all duration-300
            cursor-pointer
          ">
            <h2 className="text-4xl font-bold mb-4">
              ADRI-X
            </h2>

            <p className="text-gray-400 text-lg mb-4">
              Compact autonomous UAV platform for flight systems
              research, experimentation, and prototyping.
            </p>

            <p className="text-cyan-300">
              Status: In Development
            </p>
          </div>
        </Link>

        <Link href="/projects/gridhrah">
          <div className="
            border border-purple-500/20
            rounded-2xl
            p-8
            hover:border-purple-400
            hover:shadow-[0_0_25px_rgba(167,139,250,0.25)]
            transition-all duration-300
            cursor-pointer
          ">
            <h2 className="text-4xl font-bold mb-4">
              Project Gridhrah
            </h2>

            <p className="text-gray-400 text-lg mb-4">
              Advanced perching UAV platform inspired by the
              endurance and observation capabilities of a vulture.
            </p>

            <p className="text-purple-300">
              Status: Active Research
            </p>
          </div>
        </Link>

        <Link href="/projects/aveksh">
          <div className="
            border border-blue-500/20
            rounded-2xl
            p-8
            hover:border-blue-400
            hover:shadow-[0_0_25px_rgba(96,165,250,0.25)]
            transition-all duration-300
            cursor-pointer
          ">
            <h2 className="text-4xl font-bold mb-4">
              Aveksh
            </h2>

            <p className="text-gray-400 text-lg mb-4">
              AI-powered surveillance and terrain analysis system
              designed for autonomous observation and mapping.
            </p>

            <p className="text-blue-300">
              Status: In Development
            </p>
          </div>
        </Link>

      </div>

    </main>
  );
}