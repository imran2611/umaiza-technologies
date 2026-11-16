import LegalPage from "../components/common/LegalPage";
import { SITE } from "../utils/siteConfig";

const sections = [
  {
    heading: "1. Acceptance Of Terms",
    paragraphs: ["By using this website or our services, you agree to these terms. If you do not agree, please do not use the website."],
  },
  {
    heading: "2. Our Services",
    paragraphs: ["We provide software development and IT services. The exact scope, timeline, price and deliverables of each project are defined in a written proposal or agreement."],
  },
  {
    heading: "3. Quotes And Payments",
    paragraphs: ["Quotes are valid for the period stated in the proposal. Payment terms, milestones and invoices will be agreed in writing before work begins."],
  },
  {
    heading: "4. Intellectual Property",
    paragraphs: ["Unless agreed otherwise in writing, ownership of the final delivered work transfers to the client after full payment. We keep the right to reuse general tools, libraries and know-how that are not specific to the client."],
  },
  {
    heading: "5. Confidentiality",
    paragraphs: ["We treat your project information as confidential and will sign a Non-Disclosure Agreement (NDA) on request."],
  },
  {
    heading: "6. Limitation Of Liability",
    paragraphs: ["To the extent permitted by law, we are not liable for indirect or consequential losses arising from the use of our website or services."],
  },
  {
    heading: "7. Governing Law",
    paragraphs: ["These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts at Thane, Maharashtra."],
  },
  {
    heading: "8. Changes To These Terms",
    paragraphs: ["We may update these terms from time to time. The latest version will always be available on this page."],
  },
  {
    heading: "9. Contact",
    paragraphs: [`Questions about these terms can be sent to ${SITE.email}.`],
  },
];

function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="November 2026"
      intro={`These terms apply to your use of the ${SITE.name} website and services.`}
      sections={sections}
    />
  );
}

export default Terms;