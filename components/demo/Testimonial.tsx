"use client";
import { getRandomInt } from "@/utils/utils";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const userReviews = [
  {
    id: 1,
    name: "Ganesh K.",
    designation: "FinEase Investor",
    img: "/images/user_test1.png",
    review:
    "Very streamlined process. Working with FinEase was very easy and quite professional. Received great customer service as well. I recommend FinEase for both investing peer-to-peer and borrowing from other peers. A+ service. Keep up the excellent work!",
  },
  {
    id: 1,
    name: "Adrian Chow",
    designation: "Finease Investor",
    img: "/images/user_test2.png",
    review:
    "Great interface. Interesting platform for Canadian investors to benefit from peer to peer lending.",
  },
  {
    id: 1,
    name: "Amy Fillip",
    designation: "FinEase Borrower",
    img: "/images/user_test3.png",
    review:
    "My experience with FinEase was easy and stress free. The contacts by phone and emails were very professional. If you need a leg up financially, I would recommend looking into FinEase.",
  },
  {
    id: 1,
    name: "Stephen N.",
    designation: "FinEase Borrower",
    img: "/images/user_test4.png",
    review:
    "Very nice people, and very honest in why I was declined. Will try again in a few months to a year :(", 
  },
  {
    id: 1,
    name: "Colin L.",
    designation: "FinEase Borrower",
    img: "/images/user_test5.png",
    review:
    "Great customer service. Really went out of there way to help get a great loan."
  },
  {
    id: 1,
    name: "Angela",
    designation: "FinEase Investor",
    img: "/images/user_test6.png",
    review:
    "Simple, easy. you know what you get! Always responsive to your questions! Thought this kind of investment were over complified for simple folk like me, but FinEase eliminate that barrier!"
  }
];


const Testimonial = () => {
  return (
    <section id="testimonials" className="py-14 lg:py-28">
      <div className="container">
        <div className="max-w-[526px] mx-auto text-center mb-10 lg:mb-14">
          <span className="btn-outline font-semibold py-2 px-4">
            {" "}
            <i className="las la-rocket"></i> Testimonial
          </span>
          <h2 className="h2 mb-4 lg:mb-6 mt-4">What People Say</h2>
          <p className="text-sm md:text-base">
            Some of our happy customers review regarding our Qualities
            and Supports.
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={12}
            loop
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".prev-review",
              nextEl: ".next-review",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
            }}>
            {userReviews.map(({ id, designation, img, name, review }) => (
              <SwiperSlide key={id} className="p-3">
                <div className="shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)] bg-n0 dark:bg-bg4 p-3 rounded-xl">
                  <div className="bg-primary/5 dark:bg-bg3 rounded-xl border border-n30 dark:border-n500 p-4 md:p-6">
                    <ul className="mb-4 flex gap-2">
                      {Array.from({ length: getRandomInt(4,6) }).map((item, index) => (
                        <i
                          key={index}
                          className="las la-star text-[#FFC700] text-lg"></i>
                      ))}
                    </ul>
                    <p className="md:text-lg mb-6 xl:mb-8">{review}</p>
                    <div className="flex items-center gap-4 lg:gap-6">
                      <Image
                        src={img}
                        width={60}
                        height={60}
                        className="rounded-full"
                        alt="img"
                      />
                      <div>
                        <h5 className="h5 mb-2">{name}</h5>
                        <p>{designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center gap-3 mt-8">
            <button className="p-1.5 xl:p-2.5 rtl:rotate-180 disabled:cursor-not-allowed prev-review border hover:bg-primary hover:text-n0 duration-300 border-primary text-primary rounded-full">
              <IconChevronLeft />
            </button>
            <button className="p-1.5 xl:p-2.5 rtl:rotate-180 disabled:cursor-not-allowed next-review border hover:bg-primary hover:text-n0 duration-300 border-primary text-primary rounded-full">
              <IconChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
