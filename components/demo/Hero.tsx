"use client";
import chart from "@/public/images/demo/chart.png";
import illustration from "@/public/images/demo/hero-illustration.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Navbar from "./Navbar";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-[url(/images/demo/hero-bg.png)] relative">
      <Image
        className="absolute max-md:hidden bottom-0 right-5 xxl:right-14"
        src={chart}
        alt="banner image"
      />
      <Image
        className="absolute max-xl:hidden bottom-0 left-5"
        src={illustration}
        alt="banner image"
      />
      <div className="bg-gradient-to-b from-primary/20 to-n0 dark:to-[#1B232D] pt-32 md:pt-40 lg:pt-44 pb-14 lg:pb-20">
        <Navbar />
        <div className="container ">
          <div className="flex flex-col gap-10 lg:gap-16">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6">
              Canada's innovative platform for peer-to-peer financial empowerment
              </h1>
              <p className="xl:text-xl mb-8 lg:mb-10 text-sm md:text-base max-xxxl:max-w-[600px] mx-auto">
                Welcome to FinEase, where we connect creditworthy Canadians looking for a loan with everyday Canadians looking to invest.
              </p>
              <div className="flex gap-4 justify-center lg:gap-6">
                <Link href="#" className="btn">
                  Borrow
                </Link>
                <Link href="#pages" className="btn-outline">
                  Invest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
