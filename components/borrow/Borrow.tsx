"use client";

import Link from "next/link";
import Image from "next/image";
import home3 from "@/public/images/borrow/home3.jpg";
import vehicle from "@/public/images/borrow/vehicle.jpg";
import creditcard from "@/public/images/borrow/creditcard.png";
import Working from "./Working";
import Process from "./Process";

const Borrow = () => {
  return <>
    <div className="bg-[url(/images/demo/hero-bg.png)]" style={{marginBottom: "0px" }}>
       <section
        className="py-20 mt-10"
        style={{ marginTop: "20px", marginBottom: "0px", paddingBottom:"0px"}}
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
          <div className="flex flex-col border-r-2 dark:border-n500 lg:mb-16 hover:text-red-400">
            <div className="pl-2 pr-8 flex flex-col items-center">
            <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 -z-10">
          </div>
              <h3 className="h3 mb-3 text-center">
              Interest Starting at 8% APR
              </h3>
              <p className="text-sm text-center">Starting with an Annual Percentage Rate (APR) as low as 8%, our loans are designed to offer you the financial flexibility you need without the burden of high interest rates.</p>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="flex flex-col border-r-2 dark:border-n500 lg:mb-16 hover:text-red-400">
            <div className="pl-2 pr-8 flex flex-col items-center">
              <h3 className="h3 mb-3 text-center">
              Access Up To $35,000 in Lending
              </h3>
              <p className="text-sm text-center">Empower your financial aspirations by gaining access to loans up to $35,000. Whether it's for consolidating debt, making home improvements, or funding a significant life event.</p>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="flex flex-col lg:mb-16 hover:text-red-400">
            <div className="pl-2 pr-8 flex flex-col items-center">
              <h3 className="h3 mb-3 text-center">
              Affordable Payments
              </h3>
              <p className="text-sm text-center">With our commitment to low payment plans, managing your loan is stress-free and sustainable over the term. Our structured repayment schedule is designed to fit comfortably within your monthly budget.</p>
            </div>
          </div>
        </div>
       </section> 
       <section className="py-20 mt-10"
        style={{ marginTop: "0px", marginBottom: "0px", paddingTop:"0px"}}>
        {/* <!-- Cards --> */}

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

      <Working/>
      </section>

      <section className="py-20 mt-10"
        style={{marginTop:"0px", marginBottom: "0px", paddingTop:"0px"}}>
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-5 lg:mt-28" style={{marginTop: "0px"}}>
          {/* <!-- Content --> */}
          <div className="flex flex-1 flex-col items-center lg:items-end">
            <h2 className="text-2xl sm:text-3xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6" style={{width: "400px"}}>
            Am I eligible to borrow through FinEase?
            </h2>
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <ul className="list-disc">
              <li className="mb-1.5 text-lg">You must be 18 years of age or older.</li>
              <li className="mb-1.5 text-lg">Possess a minimum credit rating of 600.</li>
              <li className="mb-1.5 text-lg">Earn an annual income over $35,000 regularly.</li>
              <li className="mb-1.5 text-lg">Hold an active bank account in Canada.</li>
              <li className="mb-1.5 text-lg">Must have resided in Canada for a minimum of three years.</li>
            </ul>
          </div> 
        </div>

        <Process/>
      </section>
    </div>
    </>
};


export default Borrow;