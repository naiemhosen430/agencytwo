import Image from "next/image";
import Hero from "./components/Pages/Home/Hero";
import AboutSection from "./components/Pages/Home/AboutSection";
import WorkProcess from "./components/Pages/Home/WorkProcess";
import ServiceSection from "./components/Pages/Home/ServiceSection";
import Customer from "./components/Pages/Home/Customer";
import VideoSection from "./components/Pages/Home/VideoSection";
import ClientSection from "./components/Pages/Home/ClientSection";
import TestimonialSection from "./components/Pages/Home/TestimonialSection";
import TechnologySection from "./components/Pages/Home/TechnologySection";
import BlogSection from "./components/Pages/Home/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkProcess />
      <ServiceSection />
      <Customer />
      <VideoSection />
      <ClientSection />
      <TestimonialSection />
      <TechnologySection />
      <BlogSection />
    </>
  );
}
