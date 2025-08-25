import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import QuoteFeature from '@/components/QuoteFeature';
import RichContent from '@/components/RichContent';
import MagicFeature from '@/components/MagicFeature';
import EfficientFeature from '@/components/EfficientFeature';
import Testimonials from '@/components/Testimonials';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <div className="text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <QuoteFeature />
        <RichContent />
        <MagicFeature />
        <EfficientFeature />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

