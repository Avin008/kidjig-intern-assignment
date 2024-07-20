import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-cover flex flex-col justify-center items-center bg-pattern">
      <Navbar />
      <Image
        src="/ellipse1.png"
        className="absolute bg-blend-soft-light top-5 right-0"
        alt=""
        height={1000}
        width={1000}
      />
      <div className="z-20">
        <h1 className="text-[56px] font-normal leading-[65px] flex flex-col text-[#FFFFFF]">
          Empowering Lives Through{" "}
          <span>
            Innovative{" "}
            <span className="font-bold decoration-[#6A35FF] underline">AI</span>{" "}
            Technologies.
          </span>
        </h1>
        <p className="text-[22px] mt-[26px] text-[#C0C2CC]">
          Finding new horizons for visionaries to accelerate their innovation
          and progress.
        </p>
        <div className="flex gap-[15px] mt-[23px]">
          <Link
            className="w-[239px] font-bold rounded-[12px] text-[#FFFFFF] bg-[#6A35FF] h-[53px] flex items-center justify-center"
            href="/"
          >
            Explore Our Services
          </Link>
          <Link
            className="w-[155px] font-semibold h-[53px] flex justify-center items-center text-[#FFFFFF] rounded-[12px] border border-[#6881FF]"
            href="/"
          >
            Learn more
          </Link>
        </div>
        <div className="flex justify-start mt-[82px]">
          <p className="gradient-text font-normal text-[24px]">
            From Ideas to Software Solutions{" "}
            <span className="no-gradient">💡✨</span> From Ideas to Software
            Solutions <span className="no-gradient">🌟✨</span> From Ideas to{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
