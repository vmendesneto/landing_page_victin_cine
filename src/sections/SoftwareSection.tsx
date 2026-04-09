import laptopArt from '../../assets/icons/mac 1.svg'
import porDentroIcon from '../../assets/icons/por_dentro.svg'
import cashIcon from '../../assets/icons/cash.svg'
import paintIcon from '../../assets/icons/paint.svg'
import configIcon from '../../assets/icons/config.svg'
import versatileIcon from '../../assets/icons/versatil.svg'
import { softwareCards } from '../data/landingContent'
import './SoftwareSection.css'

function FeatureGlyph({ icon }: { icon: string }) {
  const src =
    icon === 'free'
      ? cashIcon
      : icon === 'performance'
        ? configIcon
        : icon === 'color'
          ? paintIcon
          : versatileIcon

  return <img className="softwareSectionGlyphImage" src={src} alt="" aria-hidden="true" />
}

function SoftwareSection() {
  return (
    <section className="softwareSection">
      <img
        className="softwareSectionImage"
        src={laptopArt}
        alt="Notebook com o DaVinci Resolve aberto"
      />

      <div className="softwareSectionHeader">
        <div className="softwareSectionHeading">
          <div className="sectionTag sectionTagWithIcon softwareSectionTag">
            <img className="sectionTagIcon" src={porDentroIcon} alt="" aria-hidden="true" />
            <span>Sobre o software</span>
          </div>
          <h2 className="softwareSectionTitle">
            <span className="softwareSectionTitleLine">Por que escolher o</span>
            <span className="softwareSectionTitleLine">DaVinci Resolve?</span>
          </h2>
        </div>
      </div>

      <div className="softwareSectionGrid">
        {softwareCards.map((card) => (
          <article className="softwareSectionCard" key={card.title}>
            <div className="softwareSectionCardCopy">
              <h3 className="softwareSectionCardTitle">{card.title}</h3>
              <p className="softwareSectionCardText">{card.description}</p>
            </div>

            <div className="softwareSectionIcon" aria-hidden="true">
              <FeatureGlyph icon={card.icon} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SoftwareSection
