const MyFooter = () => (
  <footer>
    <div className="row justify-content-center pt-5 bg">
      <div className="col col-6">
        <div className="row">
          <div className="col mb-2">
            <i className="bi bi-facebook footer-icon me-2 text-secondary"></i>
            <i className="bi bi-instagram footer-icon me-2 text-secondary"></i>
            <i className="bi bi-twitter-x footer-icon me-2 text-secondary"></i>
            <i className="bi bi-youtube footer-icon text-secondary"></i>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p className="mb-0">
                  <a href="#audio-and-subtitles" alt="footer link" className="text-secondary text-decoration-none">
                    Audio and Subtitles
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#media-center" alt="footer link" className="text-secondary text-decoration-none">
                    Media Cente
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#privacy" alt="footer link" className="text-secondary text-decoration-none">
                    Privacy
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#contact-us" alt="footer link" className="text-secondary text-decoration-none">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p className="mb-0">
                  <a href="#audio-description" alt="footer link" className="text-secondary text-decoration-none">
                    Audio Description
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#investor-relations" alt="footer link" className="text-secondary text-decoration-none">
                    Investor Relations
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#legal-notices" alt="footer link" className="text-secondary text-decoration-none">
                    Legal Notices
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p className="mb-0">
                  <a href="#help-center" alt="footer link" className="text-secondary text-decoration-none">
                    Help Center
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#jobs" alt="footer link" className="text-secondary text-decoration-none">
                    Jobs
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#cookie-preferences" alt="footer link" className="text-secondary text-decoration-none">
                    Cookie Preferences
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p className="mb-0">
                  <a href="#gift-cards" alt="footer link" className="text-secondary text-decoration-none">
                    Gift Cards
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#terms-of-use" alt="footer link" className="text-secondary text-decoration-none">
                    Terms of Use
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#corporate-information" alt="footer link" className="text-secondary text-decoration-none">
                    Corporate Information
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2">
            <button
              type="button"
              className="btn btn-sm footer-button rounded-0 mt-3 text-secondary border border-secondary"
            >
              Service Code
            </button>
          </div>
        </div>
        <div>
          <div className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</div>
        </div>
      </div>
    </div>
  </footer>
);

export default MyFooter;
