import Invest from "@/components/invest/Invest"
import Navbar from "@/components/demo/Navbar"
import Features from "@/components/invest/Features"
import Footer from "@/components/demo/Footer";

const page = () => {
    return (
      <main className="overflow-x-hidden">
        <Navbar/>
        <Invest/>
        <Features/>
        <Footer />
      </main>
    );
}

export default page;