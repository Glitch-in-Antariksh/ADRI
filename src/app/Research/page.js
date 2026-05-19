export default function Research() {
  return (
    <main className="bg-black text-white min-h-screen px-16 py-16">

      <div className="max-w-5xl text-left">

        <h1 className="text-6xl font-bold mb-8">
          Research
        </h1>

        <p className="text-gray-400 text-xl leading-10">
          ADRI focuses on the exploration and development of
          next-generation defence technologies designed for
          autonomous operation, intelligent coordination,
          and battlefield adaptability.
        </p>

        <p className="text-gray-500 text-lg leading-9 mt-10">
          Our current research interests include autonomous
          aerial systems, intelligent surveillance platforms,
          computer vision, tactical robotics, embedded systems,
          and AI-assisted battlefield technologies. Through rapid
          prototyping and experimental engineering, ADRI aims to
          bridge theoretical research with real-world deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          <div className="border border-gray-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">
              Autonomous Systems
            </h2>

            <p className="text-gray-500 leading-8">
              Research into intelligent unmanned systems capable
              of navigation, target tracking, and adaptive mission
              execution.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">
              Computer Vision
            </h2>

            <p className="text-gray-500 leading-8">
              Developing real-time visual recognition systems for
              surveillance, detection, and tactical awareness.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">
              Embedded Electronics
            </h2>

            <p className="text-gray-500 leading-8">
              Designing compact and efficient hardware systems
              for autonomous platforms and field deployment.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">
              Defence AI
            </h2>

            <p className="text-gray-500 leading-8">
              Exploring machine learning and intelligent decision
              systems for next-generation defence applications.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}