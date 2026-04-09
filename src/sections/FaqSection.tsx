import { useState } from 'react'
import porDentroIcon from '../../assets/icons/por_dentro.svg'
import { faqs } from '../data/landingContent'
import './FaqSection.css'

function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="faqSection" id="faq">
      <div className="faqSectionLayout">
        <div className="faqSectionIntro">
          <div className="sectionTag sectionTagWithIcon">
            <img className="sectionTagIcon" src={porDentroIcon} alt="" aria-hidden="true" />
            <span>Tire suas dúvidas</span>
          </div>
          <h2 className="faqSectionTitle">Perguntas frequentes:</h2>
        </div>

        <div className="faqSectionList">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index

            return (
              <article
                className={isOpen ? 'faqSectionItemOpen' : 'faqSectionItem'}
                key={faq.question}
              >
                <button
                  className="faqSectionTrigger"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  type="button"
                >
                  <span>{faq.question}</span>
                  <span>{isOpen ? '▴' : '▾'}</span>
                </button>
                {isOpen ? <p className="faqSectionAnswer">{faq.answer}</p> : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
