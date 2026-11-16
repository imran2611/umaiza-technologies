import { Helmet } from "react-helmet-async";
import { SITE } from "../../utils/siteConfig";

function PageTitle({ title }) {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} | ${SITE.tagline}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  );
}

export default PageTitle;