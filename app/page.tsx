/* eslint-disable react/no-unescaped-entities */
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import UspGrid from './components/UspGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import BoatSection from './components/BoatSection';
import DatesPrices from './components/DatesPrices';
import EthicsStrip from './components/EthicsStrip';
import Reviews from './components/Reviews';
import BlogTeasers from './components/BlogTeasers';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import BrandBanner from "./components/BrandBanner";
import ExperienceDuo from "./components/ExperienceDuo";


export default function Page(){
  return (
    <div className='min-h-screen bg-[#FAF7F2] text-[#111]'>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <UspGrid />
        <BrandBanner />
        <ExperienceTimeline />
        <ExperienceDuo />
        <BoatSection />
        <DatesPrices />
        <EthicsStrip />
        <Reviews />
        <BlogTeasers />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
