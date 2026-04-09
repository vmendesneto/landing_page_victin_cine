import { useState } from 'react'
import aboutIcon from '../../assets/icons/about_blur.svg'
import falanteAbout from '../../assets/icons/falante_About.svg'
import porDentroIcon from '../../assets/icons/por_dentro.svg'
import downIcon from '../../assets/icons/down.svg'
import upIcon from '../../assets/icons/up.svg'
import { moduleButtons, moduleTopics, videoLink } from '../data/landingContent'
import './AboutCourseSection.css'

function AboutCourseSection() {
  const [openModule, setOpenModule] = useState<string | null>(null)

  return (
    <section className="aboutCourseSection">
      <div className="aboutCourseSectionIconWrap" aria-hidden="true">
        <img
          className="aboutCourseSectionIcon"
          src={aboutIcon}
          alt=""
        />
      </div>

      <div className="aboutCourseGrid">
        <div className="aboutCourseMediaColumn">
          <div className="aboutCourseSectionTag aboutCourseIntroTag">
            <img
              className="aboutCourseSectionTagIcon"
              src={porDentroIcon}
              alt=""
              aria-hidden="true"
            />
            <span>Sobre o curso</span>
          </div>

          <div className="aboutCourseVideo">
            <iframe
              className="aboutCourseVideoFrame"
              src={videoLink.replace('watch?v=', 'embed/')}
              title="Dominando DaVinci Resolve"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="aboutCourseText">
          <div className="aboutCourseInlineIconWrap" aria-hidden="true">
            <img
              className="aboutCourseInlineIcon"
              src={falanteAbout}
              alt=""
            />
          </div>

          <div className="aboutCourseCopy">
            <h2 className="aboutCourseTitle">
              O DaVinci não é tão difícil quanto você imagina.
            </h2>
            <p className="aboutCourseDescription">
              E eu vou te explicar o porquê.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutCourseModulesShell">
        <div
          className={`aboutCourseModulesPanel${
            openModule ? ' aboutCourseModulesPanelExpanded' : ''
          }`}
        >
          <div className="aboutCourseModules">
            <div className="aboutCourseSectionTag">
              <img
                className="aboutCourseSectionTagIcon"
                src={porDentroIcon}
                alt=""
                aria-hidden="true"
              />
              <span>POR DENTRO DE CADA MODULO</span>
            </div>
            <h2 className="aboutCourseModulesTitle">
              <span className="aboutCourseModulesTitleLine">O que você vai</span>
              <span className="aboutCourseModulesTitleLine">
                aprender no curso:
              </span>
            </h2>

            <div className="aboutCourseModulesGrid">
              {moduleButtons.map((moduleTitle) => (
                <div className="aboutCourseModulesEntry" key={moduleTitle}>
                  <button
                    aria-expanded={openModule === moduleTitle}
                    className={`aboutCourseModulesButton${
                      openModule === moduleTitle
                        ? ' aboutCourseModulesButtonActive'
                        : ''
                    }`}
                    type="button"
                    onClick={() =>
                      setOpenModule((currentOpenModule) =>
                        currentOpenModule === moduleTitle ? null : moduleTitle
                      )
                    }
                  >
                    <span className="aboutCourseModulesButtonLabel">
                      {moduleTitle}
                    </span>
                    <img
                      className="aboutCourseModulesButtonIcon"
                      src={openModule === moduleTitle ? upIcon : downIcon}
                      alt=""
                      aria-hidden="true"
                    />
                  </button>

                  {openModule === moduleTitle ? (
                    <div className="aboutCourseModulesDetails">
                      <ul className="aboutCourseModulesList">
                        {moduleTopics[moduleTitle].map((topic) => (
                          <li className="aboutCourseModulesItem" key={topic}>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCourseSection
