import Image from "next/image";
import invest1 from "@/public/images/invest/invest1.png";
import invest2 from "@/public/images/invest/invest2.jpg";
import invest3 from "@/public/images/invest/invest3.jpg";
import invest4 from "@/public/images/invest/invest4.webp";
import Link from "next/link";

const Invest = () => {
  return (
    <div className="bg-[url(/images/demo/hero-bg.png)] ">
      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* <!-- Content --> */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-3xl sm:text-4xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6">
              Canada's Leading Marketplace Lender
            </h2>
            <p className="xl:text-xl mb-8 lg:mb-10 text-sm md:text-base max-xxxl:max-w-[600px] mx-auto">
              9% Average net annualized return to investors. Lend to Canadians
              and earn interest.
            </p>
            <div className="flex justify-center flex-wrap gap-6 mt-0">
        <Link className="btn max-md:hidden" href="/auth/sign-up">
            Get Started
          </Link>
            </div>
          </div>
          {/* <!-- Image --> */}
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 -z-10">
            <Image
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full -z-50 rounded"
              src={invest1}
              alt=""
            />
          </div>
        </div>
      </section>

      <div className="border-y-2 border-y-n300 border-dashed border-slate-500 dark:border-y-n500  bg-transparent text-center p-5 py-10">
        <h2 className="text-2xl sm:text-3xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6 text-center">
          98% of FinEase investors have experienced net gains on their returns.
        </h2>
        <p className="text-base dark:text-gray-300 text-center italic mt-2">
          Open your free account to explore the platform, no investment
          required.
        </p>
      </div>

      {/* <!-- Features --> */}
      <section className="bg-bookmark-white py-10">
        {/* <!-- Heading --> */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl sm:text-4xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6 text-center">
            The FinEase Platform
          </h1>
        </div>
        {/* <!-- Feature #1 --> */}
        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* <!-- Image --> */}
            <div className="flex flex-1 justify-center -z-10 mb-10 lg:mb-0">
              <Image
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full  rounded"
                src={invest2}
                alt=""
              />
            </div>
            {/* <!-- Content --> */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h2 className="h2 mb-4 text-center">
                Discover Investment Opportunities
              </h2>
              <p className="xl:text-xl mb-8 lg:mb-10 text-sm md:text-base max-xxxl:max-w-[600px] mx-auto">
                Navigate the marketplace to find and choose loans that align
                with your financial goals.
              </p>
            </div>
          </div>
          {/* <!-- Rounded Rectangle --> */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "
          ></div>
        </div>
        {/* <!-- Feature #2 --> */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            {/* <!-- Image --> */}
            <div className="flex flex-1 justify-center -z-10 mb-10 lg:mb-0">
              <Image
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded"
                src={invest3}
                alt=""
              />
            </div>
            {/* <!-- Content --> */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h2 className="h2 mb-4 text-center">Intelligent search</h2>
              <p className="xl:text-xl mb-8 lg:mb-10 text-sm md:text-base max-xxxl:max-w-[600px] mx-auto">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to crawl through all of your bookmarks.
              </p>
            </div>
          </div>
          {/* <!-- Rounded Rectangle --> */}
          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-l-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -right-36
          "
          ></div>
        </div>
        {/* <!-- Feature #3 --> */}
        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            {/* <!-- Image --> */}
            <div className="flex flex-1 justify-center -z-10 mb-10 lg:mb-0">
              <Image
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded"
                src={invest4}
                alt=""
              />
            </div>
            {/* <!-- Content --> */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h2 className="h2 mb-4 text-center">Share your bookmarks</h2>
              <p className="xl:text-xl mb-8 lg:mb-10 text-sm md:text-base max-xxxl:max-w-[600px] mx-auto">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y-2 border-y-n300 border-dashed border-slate-500 dark:border-y-n500 bg-transparent text-center p-5 py-10">
        <h2 className="text-2xl sm:text-3xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6 text-center">
          2.7% loan loss rate across 2,265 loans
        </h2>
      </div>

      <section
        className="py-20 mt-10"
        style={{ marginTop: "10px", marginBottom: "0px" }}
      >
        {/* <!-- Heading --> */}
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl sm:text-4xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6 text-center">
            How it works
          </h1>
          <h3 className="h3 mb-4 text-center">
            FinEase connects Canadians looking for a loan with Canadians looking
            to invest.{" "}
          </h3>
          <p className="text-base text-center">
            As a FinEase investor, you invest in Canadian consumer loans, earn
            interest and monthly passive income – just like a bank!
          </p>
        </div>
        {/* <!-- Cards --> */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
          {/* <!-- Card 1 --> */}
          <div className="flex flex-col rounded-md shadow-md bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 lg:mb-16">
            <div className="p-6 flex flex-col items-center">
              <h3 className="h3 mb-4 text-center">
                Expand Your Investment Horizons
              </h3>
              <p className="text-base text-center">
                Finease introduces an innovative fixed income investment
                opportunity, distinct from traditional stocks and bonds with a
                minimum investment of just $10 per loan.
              </p>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="flex flex-col rounded-md shadow-md bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 lg:mb-16">
            <div className="p-6 flex flex-col items-center">
              <h3 className="h3 mb-4 text-center">
                Receive Regular Monthly Return
              </h3>
              <p className="text-base text-center">
                Borrowers remit consistent monthly payments, inclusive of
                interest, that are directly credited to your account.
              </p>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="flex flex-col rounded-md shadow-md bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 lg:mb-16">
            <div className="p-6 flex flex-col items-center">
              <h3 className="h3 mb-4 text-center">
                Support Your Fellow Canadians
              </h3>
              <p className="text-base text-center">
                FinEase is 100% Canadian. When you invest in a FinEase loan, you
                contribute to helping real people in Canada.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invest;
