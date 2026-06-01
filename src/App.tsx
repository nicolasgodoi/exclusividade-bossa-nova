import './index.css';
import HeroCarousel from './components/HeroCarousel';
import VideoSection from './components/VideoSection';
import PropertyDetails from './components/PropertyDetails';
import PropertiesSection from './components/PropertiesSection';
import LocationSection from './components/LocationSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <main>
      <HeroCarousel />
      <VideoSection />
      <PropertyDetails />
      <PropertiesSection />
      <LocationSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
