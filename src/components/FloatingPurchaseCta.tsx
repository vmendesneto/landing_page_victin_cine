import { useEffect, useState } from 'react'
import footerLogo from '../../assets/icons/footer.svg'
import { purchaseLink } from '../data/landingContent'
import GlowButton from './GlowButton'
import './FloatingPurchaseCta.css'

function FloatingPurchaseCta() {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    const trackedCtas = Array.from(
      document.querySelectorAll<HTMLElement>('[data-primary-purchase-cta="true"]'),
    )

    if (!trackedCtas.length) {
      setShouldShow(true)
      return undefined
    }

    const visibleCtas = new Set<Element>()

    const syncVisibility = () => {
      setShouldShow(visibleCtas.size === 0)
    }

    const isElementVisible = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth

      return (
        rect.bottom > viewportHeight * 0.12 &&
        rect.top < viewportHeight * 0.88 &&
        rect.right > 0 &&
        rect.left < viewportWidth
      )
    }

    trackedCtas.forEach((cta) => {
      if (isElementVisible(cta)) {
        visibleCtas.add(cta)
      }
    })

    syncVisibility()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            visibleCtas.add(entry.target)
            return
          }

          visibleCtas.delete(entry.target)
        })

        syncVisibility()
      },
      {
        threshold: [0, 0.2, 0.4, 1],
      },
    )

    trackedCtas.forEach((cta) => observer.observe(cta))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      className={`floatingPurchaseCta${shouldShow ? ' floatingPurchaseCtaVisible' : ''}`}
      aria-hidden={shouldShow ? undefined : 'true'}
    >
      <img
        className="floatingPurchaseCtaLogo"
        src={footerLogo}
        alt="Dominando DaVinci"
      />
      <GlowButton
        wrapperClassName="floatingPurchaseCtaButtonWrap"
        className="ctaButton floatingPurchaseCtaButton"
        href={purchaseLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Quero dominar o DaVinci
      </GlowButton>
    </div>
  )
}

export default FloatingPurchaseCta
