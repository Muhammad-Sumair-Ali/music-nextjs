
import HeroSection from "./components/HeroSection"
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import MusicTestimonials from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinar";
import Instructors from "./components/Insturactors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <MusicTestimonials/>
    <UpcomingWebinars/>
    <Instructors/> 
    </main>
  );
}
