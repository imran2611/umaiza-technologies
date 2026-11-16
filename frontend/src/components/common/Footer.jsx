import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Brand from "./Brand";
import { SITE, FOOTER_LINKS } from "../../utils/siteConfig";
import { services } from "../../data/homeData";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <Brand />
            <p className="mt-3">{SITE.description}</p>
            <p className="fw-semibold text-white mb-2">{SITE.tagline}</p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {SITE.social.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-pill">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Quick Links</h6>
            <ul className="list-unstyled footer-list">
              {FOOTER_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h6>Services</h6>
            <ul className="list-unstyled footer-list">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link to="/services">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h6>Contact</h6>
            <ul className="list-unstyled footer-list">
              <li className="d-flex gap-2"><Mail size={18} className="mt-1 flex-shrink-0" /> {SITE.email}</li>
              <li className="d-flex gap-2"><Phone size={18} className="mt-1 flex-shrink-0" /> {SITE.phone}</li>
              <li className="d-flex gap-2"><MapPin size={18} className="mt-1 flex-shrink-0" /> {SITE.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span className="d-flex gap-3">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;