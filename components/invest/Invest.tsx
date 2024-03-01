import Image from "next/image";

const Invest = () => {
  return (
    <>
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/* <!-- Content --> */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6">
          Canada's Leading Marketplace Lender</h2>
         <p className="xl:text-xl mb-8 lg:mb-10 text-sm md:text-base max-xxxl:max-w-[600px] mx-auto">9% Average net annualized return to investors. Lend to Canadians and earn interest.</p>
          <div className="flex justify-center flex-wrap gap-6">
            <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">
              Get Started
            </button>
          </div>
        </div>
        {/* <!-- Image --> */}
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <Image className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full -z-50 rounded" src="/images/invest/invest1.avif" alt="" width="50" height="50" />
        </div>
      </div>
    </section>

    <div className="bg-zinc-600 text-center p-5 mt-[110px]">
    <h2 className="text-2xl sm:text-3xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6 text-center text-slate-200">
98% of FinEase investors have experienced net gains on their returns.</h2>
<p className="text-base text-gray-300 text-center italic mt-2">
Open your free account to explore the platform, no investment required.</p>
    </div>

    {/* <!-- Features --> */}
    <section style={{marginTop: "10px"}} className="bg-bookmark-white py-20 mt-10 lg:mt-60">
      {/* <!-- Heading --> */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl sm:text-4xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6 text-center">The FinEase Platform</h1>
      </div>
      {/* <!-- Feature #1 --> */}
      <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
          {/* <!-- Content --> */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="h2 mb-4 text-center">Discover Investment Opportunities</h2>
            <p className="xl:text-xl mb-8 lg:mb-10 text-sm md:text-base max-xxxl:max-w-[600px] mx-auto">
            Navigate the marketplace to find and choose loans that align with your financial goals.
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
          {/* <!-- Content --> */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="h2 mb-4 text-center">Intelligent search</h2>
            <p className="xl:text-xl mb-8 lg:mb-10 text-sm md:text-base max-xxxl:max-w-[600px] mx-auto">
              Our powerful search feature will help you find saved sites in no time at all. No need to crawl through all
              of your bookmarks.
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
          {/* <!-- Content --> */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="h2 mb-4 text-center">Share your bookmarks</h2>
            <p className="xl:text-xl mb-8 lg:mb-10 text-sm md:text-base max-xxxl:max-w-[600px] mx-auto">
              Easily share your bookmarks and collections with others. Create a shareable link that you can send at the
              click of a button.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="bg-zinc-600 text-center p-6">
    <h2 className="text-2xl sm:text-3xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6 text-center text-slate-200">2.7% loan loss rate across 2,265 loans</h2>
    </div>

    {/* <Risk Mitigation> */}
    <section className="py-20 mt-10" style={{marginTop: "10px"}}>
      {/* <!-- Heading --> */}
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 className="text-3xl sm:text-4xl min-[1650px]:text-[44px] !leading-tight font-semibold mb-4 lg:mb-6 mt-6 text-center">Mitigating Risks</h1>
      </div>
      {/* <!-- Cards --> */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
        {/* <!-- Card 1 --> */}
        <div className="flex flex-col rounded-md shadow-md lg:mb-16">
          <div className="p-6 flex flex-col items-center">
            <h3 className="h3 mb-4 text-center">Thorough Credit Evaluation</h3>
            <p className="text-base text-center">FinEase leverages cutting-edge technology to meticulously review each application, ensuring only financially responsible individuals are qualified for loans and added to our platform.</p>
          </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="flex flex-col rounded-md shadow-md lg:mb-16">
          <div className="p-6 flex flex-col items-center">
            <h3 className="h3 mb-4 text-center">Diversification</h3>
            <p className="text-base text-center">Starting with a minimum investment of just $10 per loan, you have the freedom to distribute your investments among as many different borrowers as you desire.</p>
          </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="flex flex-col rounded-md shadow-md lg:mb-16">
          <div className="p-6 flex flex-col items-center">
            <h3 className="h3 mb-4 text-center">Loan Servicing</h3>
            <p className="text-base text-center">If a borrower is unable to completely settle their loan, FinEase takes charge on your behalf. The FinEase collections and recovery team is dedicated to salvaging as much as possible to ensure your returns remain maximized.</p>
          </div>
        </div>
      </div>
    </section>
</>
  );
}

export default Invest;