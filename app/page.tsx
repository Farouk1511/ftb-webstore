import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "FTB APP",
  description: "Generated by create next app",
};


export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center flex-col ">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
          foreigner the brand
        </h1>
        <ul>
          <li>
            <Link href={"/"}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                news
              </h3>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                fall/winter 2023 preview
              </h3>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                podcast
              </h3>
            </Link>
          </li>
          <li>
            <Link href={"/shop"}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                shop
              </h3>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                random
              </h3>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              about
              </h3>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              stores
              </h3>
            </Link>
          </li>
          <li>
            <Link href={"/admin"}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              admin
              </h3>
            </Link>
          </li>

        </ul>
      </div>
    </main>
  );
}
