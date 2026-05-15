import HeroSection from './components/HeroSection'
import StatsBar from './components/StatsBar'
import ServicesGrid from './components/ServicesGrid'
import InventoryGrid from './components/InventoryGrid'
import ReviewsCarousel from './components/ReviewsCarousel'
import AboutTeaser from './components/AboutTeaser'
import ContactBand from './components/ContactBand'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <InventoryGrid />
      <ReviewsCarousel />
      <AboutTeaser />
      <ContactBand />
    </>
  )
}
