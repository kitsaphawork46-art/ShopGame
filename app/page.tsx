import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { BestSellers, FeaturedGames, HowItWorks, PopularProducts, Promotion, RecentlyAdded, Reviews, TrustSection } from "@/components/home/HomeSections";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { SearchModal } from "@/components/ui/SearchModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedGames />
        <PopularProducts />
        <Promotion />
        <BestSellers />
        <RecentlyAdded />
        <HowItWorks />
        <TrustSection />
        <Reviews />
      </main>
      <Footer />
      <SearchModal />
      <CartDrawer />
    </>
  );
}
