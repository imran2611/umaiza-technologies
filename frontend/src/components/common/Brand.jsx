import { Link } from "react-router-dom";
import Logo from "./Logo";
import { SITE } from "../../utils/siteConfig";

function Brand() {
  // "Umaiza Technologies" ko "UMAIZA" aur "TECHNOLOGIES" mein todta hai
  const [first, ...rest] = SITE.name.split(" ");

  return (
    <Link to="/" className="brand" aria-label={SITE.name}>
      <Logo />
      <span className="brand-text">
        <span className="brand-main">{first.toUpperCase()}</span>
        <span className="brand-sub">{rest.join(" ").toUpperCase()}</span>
      </span>
    </Link>
  );
}

export default Brand;
