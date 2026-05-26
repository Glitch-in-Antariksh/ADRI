export default function Team() {
  return (
    <main className="bg-black text-white min-h-screen px-8 py-16">

      {/* Header */}
      <section className="max-w-6xl mx-auto mb-20">
        <h1
          className="
            text-4xl
            md:text-5xl
            font-extrabold
            tracking-wider
            mb-6
          "
        >
          TEAM
        </h1>

        <p
          className="
            text-gray-400
            text-lg
            md:text-xl
            max-w-4xl
            leading-relaxed
          "
        >
          ADRI is built by a multidisciplinary team of engineers,
          researchers and innovators working across autonomous
          systems, aerospace engineering, electronics and artificial
          intelligence. Together, we explore technologies designed
          to push the boundaries of capability, awareness and
          autonomy.
        </p>
      </section>

      {/* Team Cards */}
      <section
  className="
    max-w-7xl
    mx-auto
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-4
    gap-6
  "
>

  {/* Operations */}
  <div
    className="
      bg-black
      border
      border-white/10
      rounded-2xl
      p-6

      transition-all
      duration-300

      hover:-translate-y-2
      hover:border-white/30
      hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
    "
  >
    <p className="text-gray-500 uppercase tracking-[0.25em] text-xs mb-2">
      Division
    </p>

    <h2 className="text-2xl font-bold mb-6">
      Operations
    </h2>

    <div className="space-y-4">

      <div>
        <h3 className="text-lg font-semibold">
          Yuvraj Singh
        </h3>
        <p className="text-gray-400 text-sm">
          Product Manager
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Dhiir Haria
        </h3>
        <p className="text-gray-400 text-sm">
          CFO & Associate Product Manager
        </p>
      </div>

    </div>
  </div>

  {/* Hardware */}
  <div
    className="
      bg-black
      border
      border-purple-500/20
      rounded-2xl
      p-6

      transition-all
      duration-300

      hover:-translate-y-2
      hover:border-purple-400
      hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]
    "
  >
    <p className="text-purple-400 uppercase tracking-[0.25em] text-xs mb-2">
      Division
    </p>

    <h2 className="text-2xl font-bold mb-6">
      Hardware
    </h2>

    <div className="space-y-4">

      <div>
        <h3 className="text-lg font-semibold">
          Prakhar Ray
        </h3>
        <p className="text-gray-400 text-sm">
          Flight Systems Lead
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Yashas PB
        </h3>
        <p className="text-gray-400 text-sm">
          Flight Systems Engineer
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Shravani Beliya
        </h3>
        <p className="text-gray-400 text-sm">
          CFO & Flight Systems Engineer
        </p>
      </div>

    </div>
  </div>

  {/* Electronics */}
  <div
    className="
      bg-black
      border
      border-cyan-500/20
      rounded-2xl
      p-6

      transition-all
      duration-300

      hover:-translate-y-2
      hover:border-cyan-400
      hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
    "
  >
    <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs mb-2">
      Division
    </p>

    <h2 className="text-2xl font-bold mb-6">
      Electronics
    </h2>

    <div className="space-y-4">

      <div>
        <h3 className="text-lg font-semibold">
          Aman Raj
        </h3>
        <p className="text-gray-400 text-sm">
          Electronics Systems Lead
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Sanket Hallijoli
        </h3>
        <p className="text-gray-400 text-sm">
          Control Systems Engineer
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Charan Manjunath Reddy
        </h3>
        <p className="text-gray-400 text-sm">
          Electronics Research Engineer
        </p>
      </div>

    </div>
  </div>

  {/* Software */}
  <div
    className="
      bg-black
      border
      border-blue-500/20
      rounded-2xl
      p-6

      transition-all
      duration-300

      hover:-translate-y-2
      hover:border-blue-400
      hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
    "
  >
    <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-2">
      Division
    </p>

    <h2 className="text-2xl font-bold mb-6">
      Software & AI
    </h2>

    <div className="space-y-4">

      <div>
        <h3 className="text-lg font-semibold">
          Amee Singh
        </h3>
        <p className="text-gray-400 text-sm">
          Software & AI Systems Engineer
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Arnav Ray
        </h3>
        <p className="text-gray-400 text-sm">
          Software & AI Systems Engineer
        </p>
      </div>

    </div>
  </div>

</section>

    </main>
  );
}
