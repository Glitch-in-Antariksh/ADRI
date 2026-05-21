export default function Team() {
  return (
    <main className="bg-black text-white min-h-screen px-16 py-16">

      <div className="max-w-6xl">

        <h1 className="text-6xl font-bold mb-8">
          Team
        </h1>

        <p className="text-gray-400 text-xl leading-10 max-w-4xl">
          ADRI brings together students from multiple engineering
          disciplines to develop autonomous systems, intelligent
          defence technologies, and next-generation research platforms.
          Our strength lies in collaboration across software,
          electronics, aerodynamics, and product development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

          {/* Operations */}

          <div className="border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold mb-6">
              Operations
            </h2>

            <div className="space-y-5 text-gray-400">

              <div>
                <h3 className="text-white text-xl font-medium">
                  Yuvraj Singh
                </h3>
                <p>Product Manager</p>
              </div>

              <div>
                <h3 className="text-white text-xl font-medium">
                  Dhiir Haria
                </h3>
                <p>CFO & Associate Product Manager</p>
              </div>

            </div>
          </div>

          {/* Hardware */}

          <div className="border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold mb-6">
              Hardware & Aerodynamics
            </h2>

            <div className="space-y-5 text-gray-400">

              <div>
                <h3 className="text-white text-xl font-medium">
                  Prakhar Ray
                </h3>
                <p>Flight Systems Lead</p>
              </div>

              <div>
                <h3 className="text-white text-xl font-medium">
                  Yashas PB
                </h3>
                <p>Flight Systems Engineer</p>
              </div>

              <div>
                <h3 className="text-white text-xl font-medium">
                  Shravani Beliya
                </h3>
                <p>CFO & Flight Systems Engineer</p>
              </div>

            </div>
          </div>

          {/* Electronics */}

          <div className="border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold mb-6">
              Electronics
            </h2>

            <div className="space-y-5 text-gray-400">

              <div>
                <h3 className="text-white text-xl font-medium">
                  Aman Raj
                </h3>
                <p>Electronics Systems Lead</p>
              </div>

              <div>
                <h3 className="text-white text-xl font-medium">
                  Sanket Hallijoli
                </h3>
                <p>Control Systems Engineer</p>
              </div>

              <div>
                <h3 className="text-white text-xl font-medium">
                  Charan Manjunath Reddy
                </h3>
                <p>Electronics Research Engineer</p>
              </div>

            </div>
          </div>

          {/* Software */}

          <div className="border border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold mb-6">
              Software & AI
            </h2>

            <div className="space-y-5 text-gray-400">

              <div>
                <h3 className="text-white text-xl font-medium">
                  Amee Singh
                </h3>
                <p>Software & AI Systems Engineer</p>
              </div>

              <div>
                <h3 className="text-white text-xl font-medium">
                  Arnav Ray
                </h3>
                <p>Software & AI Systems Engineer</p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </main>
  );
}