import mentorVisual from '../../assets/icons/perfil.png'
import mentorMark from '../../assets/icons/mentor.svg'
import mentorshipBadge from '../../assets/icons/mentoria.svg'
import adjustmentsCard from '../../assets/icons/ajustes.png'
import tabsIcon from '../../assets/icons/abas2.png'
import porDentroIcon from '../../assets/icons/por_dentro.svg'
import './MentorSection.css'

function MentorSection() {
  return (
    <div className="mentorSection">
      <img
        className="mentorSectionTabs"
        src={tabsIcon}
        alt=""
        aria-hidden="true"
      />
      <div className="mentorSectionProfile">
        <div className="mentorSectionCopy">
          <div className="sectionTag sectionTagWithIcon mentorSectionTag">
            <img
              className="sectionTagIcon"
              src={porDentroIcon}
              alt=""
              aria-hidden="true"
            />
            <span>Sobre mim</span>
          </div>
          <h2 className="mentorSectionTitle">Conheça o seu professor</h2>

          <div className="mentorSectionParagraphs">
            <p className="mentorSectionParagraph">
              <span className="mentorSectionParagraphStrong">Victor Santos</span>, mais
              conhecido como <span className="mentorSectionParagraphAccent">Victin Cine</span>,
              atua há mais de 6 anos como filmmaker, trabalhando com grandes marcas
              nacionais e diferentes nichos. Seu foco principal está na{' '}
              <span className="mentorSectionParagraphStrong">colorização</span>,
              elevando suas produções a uma estética cinematográfica.
            </p>

            <p className="mentorSectionParagraph">
              Bold, Raptor, Santa Helena, Santa Amália, MSI, MaxShop, Badaladinha
              e Devorê são algumas das marcas que ele já atendeu.
            </p>

            <p className="mentorSectionParagraph">
              Além da produção geral de vídeos, Victin também se dedica à{' '}
              <span className="mentorSectionParagraphStrong">
                criação de conteúdos
              </span>{' '}
              para outros profissionais, principalmente em seu{' '}
              <span className="mentorSectionParagraphAccent">canal no YouTube</span>,
              onde compartilha tutoriais e dicas rápidas sobre o DaVinci Resolve.
            </p>
          </div>
        </div>

        <div className="mentorSectionVisual">
          <img
            className="mentorSectionBadge"
            src={mentorshipBadge}
            alt=""
            aria-hidden="true"
          />
          <img
            className="mentorSectionImage"
            src={mentorVisual}
            alt="Retrato do professor Victor Santos"
          />
          <img
            className="mentorSectionAdjustments"
            src={adjustmentsCard}
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="mentorSectionSignature" aria-hidden="true">
        <img className="mentorSectionSignatureImage" src={mentorMark} alt="" />
      </div>
    </div>
  )
}

export default MentorSection
