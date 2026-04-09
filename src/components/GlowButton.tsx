import type { AnchorHTMLAttributes, ReactNode } from 'react'
import './GlowButton.css'

type GlowButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode
  wrapperClassName?: string
}

function GlowButton({
  children = 'Quero dominar o DaVinci',
  className = '',
  wrapperClassName = '',
  ...props
}: GlowButtonProps) {
  return (
    <div className={`glowButton btnAutomatos${wrapperClassName ? ` ${wrapperClassName}` : ''}`}>
      <a className={className} {...props}>
        <span className="glowButtonContent elementor-button-content-wrapper">
          <span className="glowButtonIcon elementor-button-icon" aria-hidden="true" />
          <span className="glowButtonText elementor-button-text">{children}</span>
        </span>
      </a>
    </div>
  )
}

export default GlowButton
