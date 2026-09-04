import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Categories, FeaturedProducts, HowItWorks, PopularGames, Promotion, Reviews, TrustStrip, WhyUs } from "@/components/home/HomeSections";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { SearchModal } from "@/components/ui/SearchModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <PopularGames />
        <Categories />
        <FeaturedProducts />
        <Promotion />
        <HowItWorks />
        <WhyUs />
        <Reviews />
      </main>
      <Footer />
      <SearchModal />
      <CartDrawer />
    </>
  );
}
