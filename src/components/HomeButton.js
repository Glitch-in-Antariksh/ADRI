import Link from "next/link";

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="
        fixed
        top-6
        left-6
        z-50

        px-4
        py-2

        border
        border-white/20

        rounded-xl

        text-sm
        font-semibold
        tracking-wider

        bg-white/5
        backdrop-blur-sm

        transition-all
        duration-300

        hover:bg-white
        hover:text-black
      "
    >
      ADRI
    </Link>
  );
}