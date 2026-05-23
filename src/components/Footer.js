export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 mt-32 py-12">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-white mb-3">
          ADRI
        </h2>

        <p className="text-gray-400 max-w-xl mb-8">
          Atreus Defence Research and Innovation.
          Building autonomous systems, intelligent
          battlefield technologies, and next-generation
          engineering solutions.

          CONTACT US: +91 831 070 8778
        </p>

        <div className="flex gap-8 text-gray-300 mb-10">
          <a href="/research">Research</a>
          <a href="/projects">Projects</a>
          <a href="/team">Team</a>
        </div>

        <div className="text-gray-500 text-sm">
          © 2026 ADRI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}