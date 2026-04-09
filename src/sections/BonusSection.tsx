import { bonusItems, purchaseLink } from '../data/landingContent'
import starsIcon from '../../assets/icons/starts.svg'
import GlowButton from '../components/GlowButton'
import './BonusSection.css'

function BonusSection() {
  return (
    <section className="bonusSection">
      <h2 className="bonusSectionTitle">Bônus exclusivo</h2>

      <div className="bonusSectionGrid">
        {bonusItems.map((item) => (
          <article className="bonusSectionCard" key={item}>
            <img
              className="bonusSectionStar"
              src={starsIcon}
              alt=""
              aria-hidden="true"
            />
            <p className="bonusSectionText">{item}</p>
          </article>
        ))}
      </div>

      <GlowButton
        wrapperClassName="bonusSectionCtaWrap"
        className="ctaButton"
        href={purchaseLink}
        target="_blank"
        rel="noopener noreferrer"
        data-primary-purchase-cta="true"
      >
        Quero dominar o DaVinci
      </GlowButton>
    </section>
  )
}

export default BonusSection
