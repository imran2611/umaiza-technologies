import LegalPage from "../components/common/LegalPage";
import { SITE } from "../utils/siteConfig";

const sections = [
  {
    heading: "1. Information We Collect",
    paragraphs: ["We collect only the information you choose to share with us, for example when you fill a contact, quote or career form."],
    list: ["Name, email address and phone number", "Company name and project details", "Career application details and profile links", "Basic technical data such as browser type and pages visited"],
  },
  {
    heading: "2. How We Use Your Information",
    paragraphs: ["We use your information to respond to your enquiry, prepare proposals, review job applications, improve our website and communicate about our services."],
  },
  {
    heading: "3. Sharing Of Information",
    paragraphs: ["We do not sell your personal information. We may share it only with trusted service providers who help us run our website and email, or when required by law."],
  },
  {
    heading: "4. Data Security",
    paragraphs: ["We use reasonable technical and organisational measures to protect your data. No online system is completely secure, so we cannot guarantee absolute security."],
  },
  {
    heading: "5. Cookies",
    paragraphs: ["Our website may use cookies or similar technologies to understand how visitors use the site. You can control cookies through your browser settings."],
  },
  {
    heading: "6. Your Rights",
    paragraphs: ["You may ask us to access, correct or delete your personal information, subject to applicable law. Please contact us using the details below."],
  },
  {
    heading: "7. Contact Us",
    paragraphs: [`For privacy questions, write to us at ${SITE.email}.`],
  },
];

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="November 2026"
      intro={`This policy explains how ${SITE.name} collects, uses and protects your information when you use our website and services.`}
      sections={sections}
    />
  );
}

export default PrivacyPolicy;