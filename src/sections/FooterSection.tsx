import { contentLink } from '../data/landingContent'
import footer from '../../assets/icons/footer.svg'
import './FooterSection.css'

function FooterSection() {
  return (
    <footer className="footerSection">
      <div className="footerSectionBrand">
        <a className="footerSectionHomeLink" href={contentLink}>
          <img
            className="footerSectionLogo"
            src={footer}
            alt="Dominando DaVinci"
          />
        </a>
      </div>
      <p className="footerSectionText">
        © 2025 Victin Cine.
        <br />
        Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default FooterSection
