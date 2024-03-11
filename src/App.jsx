//Sections
import Header from "./components/Header";
import Footer from "./section/Footer";
import HeroSection from "./section/HeroSection";
import Menus from "./section/Menus";
import PopularProducts from "./section/PopularProducts";
import Services from "./section/Services";
import SpecialOffers from "./section/SpecialOffers";
import Subscribe from "./section/Subscribe";
import SuperQuality from "./section/SuperQuality";

const App = () => {
  return (
    <main className="relative">
      <section>
        <Header />
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <HeroSection />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>

      <section className="bg-orange-400 padding-x py-12 sm:py-24 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-slate-50">
        <Menus />
      </section>
      <section className="padding-x pt-9 pb-8 bg-slate-800">
        <Footer />
      </section>
    </main>
  );
};

export default App;
