export default function Projects() {
  return (
    <main className="bg-black text-white min-h-screen px-16 py-16">

      <div className="max-w-6xl text-left">

        <h1 className="text-6xl font-bold mb-8">
          Projects
        </h1>

        <p className="text-gray-400 text-xl leading-10 max-w-4xl">
          ADRI is currently developing a range of experimental
          defence and autonomous technology systems focused on
          surveillance, intelligent reconnaissance, aerial mobility,
          and real-world battlefield adaptability.
        </p>

        <p className="text-gray-500 text-lg leading-9 mt-10 max-w-4xl">
          These projects are actively under research and development,
          with each system designed to explore practical deployment,
          rapid prototyping, and scalable defence innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition">

            <h2 className="text-3xl font-semibold mb-4">
              AI Surveillance System
            </h2>

            <p className="text-gray-500 leading-8">
              An intelligent software-based surveillance platform
              powered by computer vision and image recognition
              algorithms. The system is being designed for terrain
              mapping, target detection, object tracking, and
              autonomous battlefield awareness.
            </p>

          </div>

          <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition">

            <h2 className="text-3xl font-semibold mb-4">
              Tactical Recon Drone
            </h2>

            <p className="text-gray-500 leading-8">
              A lightweight experimental drone platform focused on
              reconnaissance, testing, and rapid prototyping.
              Designed as an agile aerial system for short-range
              surveillance and field experimentation.
            </p>

          </div>

          <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition">

            <h2 className="text-3xl font-semibold mb-4">
              Perch-Class Autonomous Drone
            </h2>

            <p className="text-gray-500 leading-8">
              A larger autonomous drone system currently under
              development with advanced aerial endurance and
              perch-capability integration. This platform is
              intended for scalable deployment and future
              commercial production.
            </p>

          </div>

          <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition">

            <h2 className="text-3xl font-semibold mb-4">
              Embedded Defence Systems
            </h2>

            <p className="text-gray-500 leading-8">
              Experimental embedded electronics and autonomous
              hardware systems being developed to support ADRI’s
              growing ecosystem of intelligent aerial and
              battlefield technologies.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}