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
  return (
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
  );
};

export default Features;
