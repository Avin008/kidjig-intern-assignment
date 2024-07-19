import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-20 fixed left-0 flex items-center right-0 top-0 bg-[#000000]">
      <div className="w-fit ml-[243px]">
        <Image src="brand.svg" width={87} height={54} alt="kiddig" />
      </div>
      <ul className="flex gap-[28px] text-[18px] ml-[191px] text-[#E4E6F2]">
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">Proccess</Link>
        </li>
        <li>
          <Link href="/">Work</Link>
        </li>
        <li>
          <Link href="/">Pricing</Link>
        </li>
        <li>
          <Link href="/">FAQs</Link>
        </li>
      </ul>
      <Link
        href={"/"}
        className="text-[#FFFFFF] ml-[115px] flex justify-center items-center rounded-[12px] border border-[#6881FF] w-[134px] h-[53px]"
      >
        Book a call
      </Link>
    </nav>
  );
};

export default Navbar;
