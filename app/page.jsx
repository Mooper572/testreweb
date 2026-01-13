import HeroSection from '@/components/layout/HeroSection'
import WhyTrinity from '@/components/sections/WhyTrinity'
import SecuritySection from '@/components/sections/SecuritySection'
import AppDownload from '@/components/sections/AppDownload'
import ServicesSection from '@/components/sections/ServicesSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhyTrinity />
      <SecuritySection />
      <AppDownload />
      <ServicesSection />
    </main>
  )
}