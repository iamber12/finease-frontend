import chart from "@/public/images/demo/chart.png";
import illustration from "@/public/images/demo/why-illustration.png";
import Image from "next/image";
import Link from "next/link";

const DiscoverApps = () => {
  return (
    <section className="bg-primary/5 dark:bg-bg3 relative">
      <div className="bg-[url(/images/demo/why-choose-bg.png)] bg-cover bg-no-repeat py-14 xl:py-28">
        <div className="container">
          <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="display-4 mt-4 mb-6">
              Discover Our Dashboard with Interactive Guide.
            </h2>
            <p className="m-7 lg:mb-10">
              A single license includes free support, free lifetime updates, and
              all the features listed above.
            </p>
            <Link href="/dashboards/style-01" className="btn">
              Checkout Our Demos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverApps;
