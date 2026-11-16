import PageTitle from "../components/common/PageTitle";
import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";
import CompanyIntro from "../components/home/CompanyIntro";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TechStack from "../components/home/TechStack";
import FeaturedProjects from "../components/home/FeaturedProjects";
import DevelopmentProcess from "../components/home/DevelopmentProcess";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";
import UmaizaMeaning from "../components/common/UmaizaMeaning";

function Home() {
  return (
    <>
      <PageTitle />
      <Hero />
      <Highlights />
      <CompanyIntro />
      <UmaizaMeaning />
      <ServicesSection />
      <WhyChooseUs />
      <TechStack />
      <FeaturedProjects />
      <DevelopmentProcess />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;