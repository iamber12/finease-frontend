const features = [
  {
    id: 1,
    title: "Minimal Service Charge",
    desc: "Investors incur a nominal annual service charge of 1.5% on the loan repayments received.",
  },
  {
    id: 2,
    title: "Maximize Your Returns",
    desc: "Leverage the Auto Invest feature to effortlessly select investments and reinvest your profits.",
  },
  {
    id: 3,
    title: "Consistent Income Stream",
    desc: "Receive steady, monthly returns through loan payment installments as a form of passive revenue.",
  },
  {
    id: 4,
    title: "Compliant with Canadian Regulations",
    desc: "FinEase is fully licensed and authorized to function in adherence to Canadian regulatory standards.",
  },
  {
    id: 5,
    title: "Safe and secure",
    desc: "Your uninvested funds are held in trust. FinEase uses state-of-the-art data encryption.",
  },
  {
    id: 6,
    title: "Help out real people",
    desc: "When you invest in a FinEase loan, you contribute to helping real people in Canada.",
  }
];

const Features = () => {
  return <>
  <section id="c-features" className="bg-primary/5 dark:bg-bg3 relative">
      <div className="bg-[url(/images/demo/why-choose-bg.png)] bg-cover bg-no-repeat py-14 xl:py-28">
        <div className="container">
          <div className="max-w-[636px] mx-auto mb-10 lg:mb-14 text-center">
            <span className="btn-outline font-semibold py-2 px-4">
              {" "}
              <i className="las la-rocket"></i> Features
            </span>
            <h2 className="h2 mt-4 mb-6">Benefits of investing through FinEase</h2>
          </div>
          <div className="grid grid-cols-12 gap-4 xxl:gap-6 relative z-[2]">
            {features.map(({ id, desc, title }) => (
              <div
                key={id}
                className="col-span-12 md:col-span-6 lg:col-span-4 box p-3 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-4 xxl:gap-6 p-4 md:p-5 xl:p-6 rounded-xl bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500">
                  <div>
                    <h5 className="h5 mb-4">{title}</h5>
                    <p className="text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

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
    
};

export default Features;
