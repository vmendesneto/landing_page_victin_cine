import porDentroIcon from '../../assets/icons/por_dentro.svg'
import audienceWatermark from '../../assets/icons/audience.svg'
import { audienceCards } from '../data/landingContent'
import './AudienceSection.css'

function AudienceSection() {
  return (
    <section className="audienceSection">
      <div className="sectionTag sectionTagWithIcon">
        <img className="sectionTagIcon" src={porDentroIcon} alt="" aria-hidden="true" />
        <span>Para quem é o curso</span>
      </div>
      <h2 className="audienceSectionTitle">
        <span className="audienceSectionTitleLine">Esse curso é </span>
        <span className="audienceSectionTitleLine">para você que:</span>
      </h2>

      <div className="audienceSectionGridShell">
        <div className="audienceSectionGrid">
          {audienceCards.map((card) => (
            <article className="audienceSectionCard" key={card.emphasis}>
              <img
                className="audienceSectionImage"
                src={card.imageUrl}
                alt={card.emphasis}
                loading="lazy"
              />
              <div className="audienceSectionBody">
                <p className="audienceSectionCardText">
                  <strong>{card.emphasis}</strong> {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="audienceSectionWatermarkWrap" aria-hidden="true">
          <img
            className="audienceSectionWatermark"
            src={audienceWatermark}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default AudienceSection
