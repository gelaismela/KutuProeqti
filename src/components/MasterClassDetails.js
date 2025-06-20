import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Single.css";

const MasterclassDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="mc-single">
      {/* Simple Header */}
      <header className="mc-simple-header">
        <div className="mc-container">
          <button
            className="mc-back-link"
            onClick={() => navigate("/masterclasses")}
          >
            <i className="fas fa-arrow-left"></i> Back to Masterclasses
          </button>
        </div>
      </header>

      {/* Masterclass Hero */}
      <section className="mc-masterclass-hero">
        <div className="mc-container">
          <div className="mc-hero-content">
            <h1>Advanced Implantology Techniques</h1>
            <p className="mc-subtitle">
              Master the latest implant protocols with hands-on training and
              expert guidance
            </p>

            <div className="mc-details-grid">
              <div className="mc-detail-item">
                <i className="far fa-calendar-alt"></i>
                <span>June 15, 2025</span>
              </div>
              <div className="mc-detail-item">
                <i className="far fa-clock"></i>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="mc-detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Boston, MA</span>
              </div>
              <div className="mc-detail-item">
                <i className="fas fa-certificate"></i>
                <span>8 CE Credits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lecturer Profile */}
      <section className="mc-lecturer-profile">
        <div className="mc-container">
          <div className="mc-lecturer-card">
            <div className="mc-lecturer-photo">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Dr. Sarah Johnson"
              />
            </div>
            <div className="mc-lecturer-info">
              <h2>Your Instructor</h2>
              <h3>Dr. Sarah Johnson</h3>
              <p className="mc-specialty">Implantology Specialist</p>
              <p className="mc-bio">
                With over 20 years of experience and more than 5,000 implants
                placed, Dr. Johnson brings unparalleled expertise to this
                masterclass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mc-gallery-section">
        <div className="mc-container">
          <h2>Masterclass Highlights</h2>
          <p className="mc-section-subtitle">
            See what our previous participants experienced
          </p>
          <div className="mc-gallery-grid">
            {[
              {
                src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Training",
                caption: "Hands-on Practice",
              },
              {
                src: "https://images.unsplash.com/photo-1608514178034-9b38b0e373b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Implants",
                caption: "Modern Techniques",
              },
              {
                src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Lecture",
                caption: "Expert Instruction",
              },
              {
                src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Practice",
                caption: "Skill Development",
              },
              {
                src: "https://images.unsplash.com/photo-1588778219541-d6b1257a7209?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                alt: "Technology",
                caption: "Advanced Technology",
              },
            ].map(({ src, alt, caption }, i) => (
              <div className="mc-gallery-item mc-gallery-item-large" key={i}>
                <img src={src} alt={alt} />
                <div className="mc-gallery-caption">{caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterclass Content */}
      <section className="mc-masterclass-content">
        <div className="mc-container">
          <div className="mc-content-box">
            <h2>About This Masterclass</h2>
            <p>
              {/* long placeholder content remains unchanged */}
              Lorem ipsum dolor sit...
            </p>

            {/* Course Format Section */}
            <div className="mc-format-section">
              <h3>Course Format</h3>
              <div className="mc-format-steps">
                <div className="mc-format-step">
                  <div className="mc-step-number">1</div>
                  <div className="mc-step-content">
                    <h4>Theoretical Foundation</h4>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                  </div>
                </div>
                <div className="mc-format-step">
                  <div className="mc-step-number">2</div>
                  <div className="mc-step-content">
                    <h4>Practical Demonstrations</h4>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mc-pricing-section">
        <div className="mc-container">
          <div className="mc-pricing-card">
            <h2>Join This Masterclass</h2>
            <div className="mc-price">$599</div>
            <p className="mc-price-note">
              One-time payment for full day training
            </p>

            <a href="#" className="mc-register-btn">
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mc-footer">
        <div className="mc-container">
          <div className="mc-footer-content">
            <div className="mc-footer-brand">
              <img
                src="https://via.placeholder.com/40x40/2E8B57/FFFFFF?text=DE"
                alt="Logo"
              />
              <span>Dental Excellence</span>
            </div>
            <div className="mc-footer-links">
              <a href="#">Contact Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="mc-copyright">
            &copy; 2023 Dental Excellence. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasterclassDetail;
