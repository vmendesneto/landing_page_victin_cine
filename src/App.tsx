import footerStrip from '../assets/icons/faixa.svg'
import footerStripReversed from '../assets/icons/faixa-reversed-bg.svg'
import './App.css'
import FloatingPurchaseCta from './components/FloatingPurchaseCta'
import AboutCourseSection from './sections/AboutCourseSection'
import AudienceSection from './sections/AudienceSection'
import BonusSection from './sections/BonusSection'
import FaqSection from './sections/FaqSection'
import FeedbackSection from './sections/FeedbackSection'
import FooterSection from './sections/FooterSection'
import HeroSection from './sections/HeroSection'
import MentorSection from './sections/MentorSection'
import OfferSection from './sections/OfferSection'
import SoftwareSection from './sections/SoftwareSection'

function App() {
  return (
    <main className="landingPage">
      <FloatingPurchaseCta />
      <HeroSection />
      <AboutCourseSection />
      <BonusSection />
      <MentorSection />
      <FeedbackSection />

      <div className="landingDividerStrip" aria-hidden="true">
        <div className="landingDividerStripTrack">
          <div className="landingDividerStripSet">
            <div className="landingDividerStripPanel landingDividerStripPanelForward">
              <img className="landingDividerStripImage" src={footerStrip} alt="" />
            </div>

            <div className="landingDividerStripPanel landingDividerStripPanelReverse">
              <img className="landingDividerStripImage" src={footerStripReversed} alt="" />
            </div>
          </div>

          <div className="landingDividerStripSet">
            <div className="landingDividerStripPanel landingDividerStripPanelForward">
              <img className="landingDividerStripImage" src={footerStrip} alt="" />
            </div>

            <div className="landingDividerStripPanel landingDividerStripPanelReverse">
              <img className="landingDividerStripImage" src={footerStripReversed} alt="" />
            </div>
          </div>
        </div>
      </div>

      <SoftwareSection />
      <AudienceSection />
      <OfferSection />
      <FaqSection />
      <FooterSection />
    </main>
  )
}

export default App
