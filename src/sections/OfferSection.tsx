import {
  accessItems,
  guaranteeImageUrl,
  pricing,
  purchaseLink,
} from '../data/landingContent'
import logo from '../../assets/icons/logo.svg'
import porDentroIcon from '../../assets/icons/por_dentro.svg'
import offerBackground from '../../assets/icons/fundo_preco.svg'
import GlowButton from '../components/GlowButton'
import './OfferSection.css'

function OfferSection() {
  return (
    <>
      <section className="offerSection" id="proposta">
        <div className="offerSectionLayout">
          <div className="offerSectionCopy">
            <div className="sectionTag sectionTagWithIcon offerSectionTag">
              <img className="sectionTagIcon" src={porDentroIcon} alt="" aria-hidden="true" />
              <span>Investimento</span>
            </div>
            <h2 className="offerSectionTitle">
              <span className="offerSectionTitleLine">Tudo que você</span>
              <span className="offerSectionTitleLine">vai ter acesso:</span>
            </h2>
            <ul className="offerSectionList">
              {accessItems.map((item) => (
                <li className="offerSectionItem" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="offerSectionSpacer" aria-hidden="true" />

          <div className="offerSectionVisualColumn">
            <img
              className="offerSectionVisualBackground"
              src={offerBackground}
              alt=""
              aria-hidden="true"
            />

            <div className="offerSectionVisual">
              <aside className="offerSectionPrice">
                <img
                  className="offerSectionLogo"
                  src={logo}
                  alt="DaVinci Resolve"
                />
                <span className="offerSectionOldPrice">
                  DE {pricing.oldPrice.replace('R$', '').trim()}
                </span>
                <span className="offerSectionOverline">Por {pricing.installment}</span>
                <div className="offerSectionPriceRow">
                  <span className="offerSectionCurrency">R$</span>
                  <strong className="offerSectionAmount">{pricing.monthly}</strong>
                </div>
                <p className="offerSectionPriceText">
                  <span className="offerSectionPriceTextLead">ou </span>
                  <strong className="offerSectionPriceTextValue">{pricing.upfront}</strong>
                </p>
                <p className="offerSectionPriceSight">à vista</p>
                <GlowButton
                  wrapperClassName="offerSectionCtaWrap"
                  className="ctaButton offerSectionCta"
                  href={purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-primary-purchase-cta="true"
                >
                  Quero dominar o DaVinci
                </GlowButton>
                <img
                  className="offerSectionBrand"
                  src={pricing.logoUrl}
                  alt="Hotmart"
                />
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="guaranteeSection">
        <div className="guaranteeSectionVisual">
          <img
            className="guaranteeSectionImage"
            src={guaranteeImageUrl}
            alt="Garantia incondicional de 7 dias"
            loading="lazy"
          />
        </div>

        <div className="guaranteeSectionCopy">
          <h2 className="guaranteeSectionTitle">Garantia incondicional</h2>
          <p className="guaranteeSectionText">
            <strong>Seu risco é zero.</strong> Se você não gostar do conteúdo
            nos primeiros <strong>7 dias</strong>, eu devolvo o valor do seu
            investimento.
          </p>
        </div>
      </section>
    </>
  )
}

export default OfferSection
