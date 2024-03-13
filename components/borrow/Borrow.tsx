"use client";

import Link from "next/link";
import Image from "next/image";
import dollar4 from "@/public/images/borrow/dollar4.png";
import invest1 from "@/public/images/invest/invest1.png";

const Borrow = () => {
  return <>
    <div className="bg-[url(/images/demo/hero-bg.png)]" style={{marginBottom: "0px" }}>
       <section
        className="py-20 mt-10"
        style={{ marginTop: "20px", marginBottom: "0px" }}
      >
        {/* <!-- Heading --> */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h2 className="text-2xl sm:text-3xl min-[1650px]:text-[44px] !leading-tight font-normal mb-4 lg:mb-6 mt-6 text-center">
        Secure a Personal Loan, Supported by the Canadians
        </h2>   
        </div>
        {/* <!-- Cards --> */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mt-16" style={{marginBottom: "0px"}}>
          {/* <!-- Card 1 --> */}
          <div className="flex flex-col rounded-md shadow-md bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 lg:mb-16 hover:text-red-400">
            <div className="p-6 flex flex-col items-center">
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 -z-10">
          </div>
              <h3 className="h3 mb-3 text-center">
              Interest Starting at 8% APR
              </h3>
              <p className="text-sm text-center">Starting with an Annual Percentage Rate (APR) as low as 8%, our loans are designed to offer you the financial flexibility you need without the burden of high interest rates.</p>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="flex flex-col rounded-md shadow-md bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 lg:mb-16 hover:text-red-400">
            <div className="p-6 flex flex-col items-center">
              <h3 className="h3 mb-3 text-center">
              Access Up To $35,000 in Lending
              </h3>
              <p className="text-sm text-center">Empower your financial aspirations by gaining access to loans up to $35,000. Whether it's for consolidating debt, making home improvements, or funding a significant life event.</p>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="flex flex-col rounded-md shadow-md bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 lg:mb-16 hover:text-red-400">
            <div className="p-6 flex flex-col items-center">
              <h3 className="h3 mb-3 text-center">
              Affordable Payments
              </h3>
              <p className="text-sm text-center">With our commitment to low payment plans, managing your loan is stress-free and sustainable over the term. Our structured repayment schedule is designed to fit comfortably within your monthly budget.</p>
            </div>
          </div>
        </div>
        <div>
      <h3 className="text-xl sm:text-2xl min-[1650px]:text-[44px] !leading-tight font-normal mb-4 lg:mb-6 mt-6 text-center">
      Register to check your rate without impacting your credit score.
      <p className="text-sm dark:text-gray-300 text-center italic mt-2">
Your data remains confidential and protected. Investors will have no access to your personal details.</p>
        </h3> 
        <div className="flex justify-center flex-wrap gap-6">
        <Link className="btn max-md:hidden" href="/auth/sign-up">
            Register
          </Link>
            </div>
      </div>
      </section>
     
    </div>
    </>
};


export default Borrow;