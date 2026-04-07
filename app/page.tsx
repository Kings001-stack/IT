import { HeroSection } from "@/components/layout/HeroSection";
import { AccreditationSection } from "@/components/layout/AccreditationSection";
import { ConferenceOverview } from "@/components/layout/ConferenceOverview";
import AboutConference from "@/components/layout/AboutConference";
import { ImageGallery } from "@/components/layout/ImageGallery";
import CoreFocus from "@/components/layout/CoreFocus";
import Partners from "@/components/layout/Partners";
import RegistrationSection from "@/components/layout/RegistrationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AccreditationSection />
      <ConferenceOverview />
      <AboutConference />
      <ImageGallery />
      <CoreFocus />
      <Partners />
      <RegistrationSection />
    </>
  );
}
