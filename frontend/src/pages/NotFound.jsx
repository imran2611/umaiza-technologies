import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";

function NotFound() {
  return (
    <>
      <PageTitle title="Page Not Found" />
      <section className="section-padding text-center" style={{ paddingTop: "calc(var(--navbar-height) + 4rem)" }}>
        <div className="container">
          <h1 className="display-1 fw-bold text-gradient">404</h1>
          <p className="text-secondary mb-4">The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-brand">Back to Home</Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;