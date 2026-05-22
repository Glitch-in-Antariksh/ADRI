export default function Team() {
  return (
    <main className="bg-black text-white min-h-screen px-8 py-16">

      {/* Header */}
      <section className="max-w-6xl mx-auto mb-20">
        <h1
          className="
            text-7xl
            md:text-8xl
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
          gap-10
        "
      >

        {/* Operations */}
        <div
          className="
            bg-black
            border
            border-white/10
            rounded-3xl
            p-10

            transition-all
            duration-300

            hover:-translate-y-2
            hover:border-white/30
            hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]
          "
        >
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-3">
            Division
          </p>

          <h2 className="text-5xl font-bold mb-10">
            Operations
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-3xl font-semibold">
                Yuvraj Singh
              </h3>
              <p className="text-gray-400 text-lg">
                Product Manager
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                Dhiir Haria
              </h3>
              <p className="text-gray-400 text-lg">
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
            rounded-3xl
            p-10

            transition-all
            duration-300

            hover:-translate-y-2
            hover:border-purple-400
            hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]
          "
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs mb-3">
            Division
          </p>

          <h2 className="text-5xl font-bold mb-10">
            Hardware & Aerodynamics
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-3xl font-semibold">
                Prakhar Ray
              </h3>
              <p className="text-gray-400 text-lg">
                Flight Systems Lead
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                Yashas PB
              </h3>
              <p className="text-gray-400 text-lg">
                Flight Systems Engineer
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                Shravani Beliya
              </h3>
              <p className="text-gray-400 text-lg">
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
            rounded-3xl
            p-10

            transition-all
            duration-300

            hover:-translate-y-2
            hover:border-cyan-400
            hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
          "
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-3">
            Division
          </p>

          <h2 className="text-5xl font-bold mb-10">
            Electronics
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-3xl font-semibold">
                Aman Raj
              </h3>
              <p className="text-gray-400 text-lg">
                Electronics Systems Lead
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                Sanket Hallijoli
              </h3>
              <p className="text-gray-400 text-lg">
                Control Systems Engineer
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                Charan Manjunath Reddy
              </h3>
              <p className="text-gray-400 text-lg">
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
            rounded-3xl
            p-10

            transition-all
            duration-300

            hover:-translate-y-2
            hover:border-blue-400
            hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
          "
        >
          <p className="text-blue-400 uppercase tracking-[0.3em] text-xs mb-3">
            Division
          </p>

          <h2 className="text-5xl font-bold mb-10">
            Software & AI
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-3xl font-semibold">
                Amee Singh
              </h3>
              <p className="text-gray-400 text-lg">
                Software & AI Systems Lead
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                Arnav Ray
              </h3>
              <p className="text-gray-400 text-lg">
                Software & AI Systems Engineer
              </p>
            </div>

          </div>
        </div>

      </section>

    </main>
  );
}