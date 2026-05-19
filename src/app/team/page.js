export default function Team() {
  return (
    <main className="bg-black text-white min-h-screen px-16 py-16">

      <div className="max-w-6xl">

        <h1 className="text-6xl font-bold mb-8">
          Team
        </h1>

        <p className="text-gray-400 text-xl leading-10 max-w-4xl">
          ADRI is built by a multidisciplinary student team
          bringing together software engineering, autonomous
          systems, electronics, and hardware development under
          a shared vision for next-generation defence technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

          <div className="border border-gray-800 rounded-2xl p-8">

            <h2 className="text-3xl font-semibold mb-6">
              Leadership & Operations
            </h2>

            <div className="space-y-4 text-gray-400 text-lg">

              <div>
                <span className="text-white font-medium">
                  Yuvraj
                </span>
                {" "}— Company Head
              </div>

              <div>
                <span className="text-white font-medium">
                  Dhiir
                </span>
                {" "}— Human Resources
              </div>

            </div>

          </div>

          <div className="border border-gray-800 rounded-2xl p-8">

            <h2 className="text-3xl font-semibold mb-6">
              Software Division
            </h2>

            <div className="space-y-4 text-gray-400 text-lg">

              <div>
                <span className="text-white font-medium">
                  Amee
                </span>
              </div>

              <div>
                <span className="text-white font-medium">
                  Arnav
                </span>
              </div>

              <div>
                <span className="text-white font-medium">
                  Sanket
                </span>
              </div>

            </div>

          </div>

          <div className="border border-gray-800 rounded-2xl p-8">

            <h2 className="text-3xl font-semibold mb-6">
              Mechanical & Hardware
            </h2>

            <div className="space-y-4 text-gray-400 text-lg">

              <div>
                <span className="text-white font-medium">
                  Prakhar
                </span>
              </div>

              <div>
                <span className="text-white font-medium">
                  Yashas
                </span>
              </div>

              <div>
                <span className="text-white font-medium">
                  Shravani
                </span>
              </div>

            </div>

          </div>

          <div className="border border-gray-800 rounded-2xl p-8">

            <h2 className="text-3xl font-semibold mb-6">
              Electronics Division
            </h2>

            <div className="space-y-4 text-gray-400 text-lg">

              <div>
                <span className="text-white font-medium">
                  Sanket
                </span>
              </div>

              <div>
                <span className="text-white font-medium">
                  Aman
                </span>
              </div>

              <div>
                <span className="text-white font-medium">
                  Charan
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}