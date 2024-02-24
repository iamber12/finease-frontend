import chart from "@/public/images/demo/chart.png";
import tailwind from "@/public/images/demo/tailwindcss.png";
import illustration from "@/public/images/demo/why-illustration.png";
import Image from "next/image";
const whyusData = [
  {
    id: 1,
    title: "User-Friendly Interface",
    desc: "Our platform offers an intuitive and easy-to-navigate interface, ensuring that even those new to online finance can manage their investments and loans with ease",
  },
  {
    id: 2,
    title: "Competitive Rates",
    desc: "We provide some of the most competitive interest rates in the market, whether you're looking to invest or secure a loan.",
  },
  {
    id: 3,
    title: "Community Trust",
    desc: "Join a community of satisfied customers who trust us with their financial needs and benefit from shared knowledge and experiences.",
  },
  {
    id: 4,
    title: "Accessible Anywhere",
    desc: "With our mobile-friendly website and app, manage your finances on the go, anytime, anywhere.",
  },
  {
    id: 5,
    title: "Fast and Efficient Service",
    desc: "Enjoy quick loan approvals and investment transactions, so you can move forward without delay.",
  },
  {
    id: 6,
    title: "Compliance by design",
    desc: "Full compliance with regulations is essential to protect both investors and borrowers.",
  },
  {
    id: 7,
    title: "Robust Security",
    desc: "The safety of your financial information is our top priority. We employ state-of-the-art encryption and cybersecurity measures to protect your data.",
  },
  {
    id: 8,
    title: "Transparency",
    desc: "We operate with complete transparency, with no hidden fees or complex terms. Our processes and charges are clear and straightforward.",
  },
  {
    id: 9,
    title: "Cross-Platform Accessibility",
    desc: " Access your financial information across various devices with a consistent and secure experience.",
  },

];

const WhyChoose = () => {
  return (
    <section id="whyus" className="bg-primary/5 dark:bg-bg3 relative">
      <Image
        className="absolute max-md:hidden bottom-5 left-4"
        src={illustration}
        alt="banner image"
      />
      <Image
        className="absolute max-md:hidden top-8 right-8"
        src={chart}
        alt="banner image"
      />
      <div className="bg-[url(/images/demo/why-choose-bg.png)] bg-cover bg-no-repeat py-14 xl:py-28">
        <div className="container">
          <div className="max-w-[636px] mx-auto mb-10 lg:mb-14 text-center">
            <span className="btn-outline font-semibold py-2 px-4">
              {" "}
              <i className="las la-rocket"></i> Why you choose us
            </span>
            <h2 className="h2 mt-4 mb-6">Exclusive Key Features</h2>
          </div>
          <div className="grid grid-cols-12 gap-4 xxl:gap-6 relative z-[2]">
            {whyusData.map(({ id, desc, title }) => (
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

export default WhyChoose;
