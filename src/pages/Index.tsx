import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <div className="antialiased selection:bg-accent-blue selection:text-primary pb-24 lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <LocationSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
