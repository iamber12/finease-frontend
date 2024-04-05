import Navbar from "@/components/demo/Navbar";
import Footer from "@/components/demo/Footer";
import Borrow from "@/components/borrow/Borrow";

const page = () => {
    return (
      <main className="overflow-x-hidden">
        <Navbar/>
        <Borrow/>
        <Footer />
      </main>
    );
}

export default page;