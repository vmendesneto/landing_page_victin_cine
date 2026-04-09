import { feedbackImageUrls } from '../data/landingContent'
import porDentroIcon from '../../assets/icons/por_dentro.svg'
import feedbackWaterImage from '../../assets/icons/feedback_agua.svg'
import feedbackSideImage from '../../assets/icons/feed_blur.svg'
import './FeedbackSection.css'

function FeedbackSection() {
  const feedbackColumns = feedbackImageUrls.reduce<string[][]>((columns, imageUrl, index) => {
    const columnIndex = index % 2

    if (!columns[columnIndex]) {
      columns[columnIndex] = []
    }

    columns[columnIndex].push(imageUrl)

    return columns
  }, [])

  return (
    <section className="feedbackSection">
      <div className="feedbackSectionLayout">
        <div className="feedbackSectionIntro">
          <div className="feedbackSectionTagRow">
            <div className="feedbackSectionSideImageWrap" aria-hidden="true">
              <div className="feedbackSectionSideImageClip">
                <img
                  className="feedbackSectionSideImage"
                  src={feedbackSideImage}
                  alt=""
                />
              </div>
            </div>

            <div className="sectionTag sectionTagWithIcon feedbackSectionTag">
              <img
                className="sectionTagIcon"
                src={porDentroIcon}
                alt=""
                aria-hidden="true"
              />
              <span>Feedback</span>
            </div>
          </div>

          <h2 className="feedbackSectionTitle">
            E veja alguns comentários reais de quem o acompanha:
          </h2>
        </div>

        <div className="feedbackSectionGalleryShell">
          <div className="feedbackSectionGallery">
            {feedbackColumns.map((column, columnIndex) => (
              <div
                className="feedbackSectionGalleryColumn"
                key={`feedback-column-${columnIndex + 1}`}
              >
                {column.map((imageUrl) => {
                  const imageIndex = feedbackImageUrls.indexOf(imageUrl)

                  return (
                    <figure className="feedbackSectionFigure" key={imageUrl}>
                      <img
                        className="feedbackSectionImage"
                        src={imageUrl}
                        alt={`Feedback ${imageIndex + 1}`}
                        loading="lazy"
                      />
                    </figure>
                  )
                })}
              </div>
            ))}
          </div>

          <img
            className="feedbackSectionWatermark"
            src={feedbackWaterImage}
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
