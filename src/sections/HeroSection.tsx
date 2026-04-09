import heroVisual from '../../assets/icons/foto.png'
import { purchaseLink } from '../data/landingContent'
import './HeroSection.css'
import logo from '../../assets/icons/logo.svg'
import GlowButton from '../components/GlowButton'

function HeroSection() {
  return (
    <section className="heroSection">
      <div className="heroSectionInner">
        <div className="heroSectionContent">
          <div className="heroSectionLogoWrap">
            <img className="heroSectionLogo" src={logo} alt="logo do Davinci" />
          </div>
          <h1 className="heroSectionTitle">
            <span>Aprenda a editar de</span>
            <span>forma descomplicada</span>
            <span>no DaVinci Resolve</span>
          </h1>
          <p className="heroSectionLead">
            O seu <strong>primeiro e último guia</strong> para dominar o melhor
            programa de edição de vídeos do mercado e elevar a qualidade das
            suas produções.
          </p>
          <GlowButton
            className="ctaButton"
            href={purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            data-primary-purchase-cta="true"
          >
            Quero dominar o DaVinci
          </GlowButton>
        </div>

        <div className="heroSectionVisualWrap" aria-hidden="true">
          <img className="heroSectionVisual" src={heroVisual} alt="" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
