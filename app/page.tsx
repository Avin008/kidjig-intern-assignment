import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-cover flex flex-col justify-center items-center bg-pattern">
      <Navbar />
      <div>
        <h1 className="text-[56px] leading-[65px] flex flex-col text-[#FFFFFF]">
          Empowering Lives Through{" "}
          <span>
            Innovative{" "}
            <span className="border-b-8 border-b-[#6A35FF] font-semibold">
              AI
            </span>{" "}
            Technologies.
          </span>
        </h1>
        <p className="text-[22px] mt-[26px] text-[#C0C2CC]">
          Finding new horizons for visionaries to accelerate their innovation
          and progress.
        </p>
        <div className="flex gap-[15px] mt-[23px]">
          <Link
            className="w-[239px] rounded-[12px] text-[#FFFFFF] bg-[#6A35FF] h-[53px] flex items-center justify-center"
            href="/"
          >
            Explore Our Services
          </Link>
          <Link
            className="w-[155px] h-[53px] flex justify-center items-center text-[#FFFFFF] rounded-[12px] border border-[#6881FF]"
            href="/"
          >
            Learn more
          </Link>
        </div>
        <div className="flex justify-start mt-[28px]">
          <p className="gradient-text text-[24px]">
            From Ideas to Software Solutions{" "}
            <span className="no-gradient">💡✨</span> From Ideas to Software
            Solutions <span className="no-gradient">🌟✨</span> From Ideas to{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
