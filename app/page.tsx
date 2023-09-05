import BlogSection from './components/landingpage-components/BlogSection'
import ContactSection from './components/landingpage-components/ContactSection'
import Footer from './components/landingpage-components/Footer'
import LandingPage from './components/landingpage-components/LandingPage'
import Portfolio from './components/landingpage-components/Portfolio'
import Services from './components/landingpage-components/Services'
import Testimonials from './components/landingpage-components/Testimonials'
import WorkExperience from './components/landingpage-components/WorkExperience'

export default function Home() {
  return (
    <main className="flex flex-col">
      <LandingPage />
      <Services />
      <WorkExperience />
      {/* <Portfolio /> */}
      <Testimonials />
      <ContactSection />
      <BlogSection />
      <Footer />
    </main>
  )
}
