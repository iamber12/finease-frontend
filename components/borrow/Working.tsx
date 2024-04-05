const steps = [
  {
    id: 1,
    title: "Quick & Simple Online Application",
    desc: "Submit your application for a peer-to-peer loan online in just a few minutes, all from the convenience of your own home.",
  },
  {
    id: 2,
    title: "Funded by Fellow Canadians",
    desc: "Thousands of individuals across Canada will be given the chance to invest in your loan, providing a unique opportunity for them to contribute to your financial goals",
  },
  {
    id: 3,
    title: "Receive Your Funds Quickly",
    desc: "Choose a loan that fits your needs. After approval, the funds will be deposited straight into your bank account."
  }
];

const Working = () => {
  return (
    <div className="relative">
    <div className="container">
    <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h2 className="text-2xl sm:text-3xl min-[1650px]:text-[44px] !leading-tight font-normal mb-4 lg:mb-6 mt-6 text-center pt-11 pb-4">
        How it works
        </h2>   
        </div>
      <div className="grid grid-cols-12 gap-4 xxl:gap-6 relative z-[2]">
        {steps.map(({ id, desc, title }) => (
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
  );
}

export default Working;