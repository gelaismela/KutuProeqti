import { useNavigate, useParams } from "react-router-dom";
import "../styles/single.css";

const MasterclassDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // future dynamic support

  return (
    <div>
      {/* Simple Header */}
      <header className="simple-header">
        <div className="container">
          <button
            className="back-link"
            onClick={() => navigate("/masterclasses")}
          >
            <i className="fas fa-arrow-left"></i> Back to Masterclasses
          </button>
        </div>
      </header>

      {/* Masterclass Hero */}
      <section className="masterclass-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Advanced Implantology Techniques</h1>
            <p className="subtitle">
              Master the latest implant protocols with hands-on training and
              expert guidance
            </p>

            <div className="details-grid">
              <div className="detail-item">
                <i className="far fa-calendar-alt"></i>
                <span>June 15, 2025</span>
              </div>
              <div className="detail-item">
                <i className="far fa-clock"></i>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Boston, MA</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-certificate"></i>
                <span>8 CE Credits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lecturer Profile */}
      <section className="lecturer-profile">
        <div className="container">
          <div className="lecturer-card">
            <div className="lecturer-photo">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Dr. Sarah Johnson"
              />
            </div>
            <div className="lecturer-info">
              <h2>Your Instructor</h2>
              <h3>Dr. Sarah Johnson</h3>
              <p className="specialty">Implantology Specialist</p>
              <p className="bio">
                With over 20 years of experience and more than 5,000 implants
                placed, Dr. Johnson brings unparalleled expertise to this
                masterclass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2>Masterclass Highlights</h2>
          <p className="section-subtitle">
            See what our previous participants experienced
          </p>
          <div className="gallery-grid">
            {["6814", "8034", "5118", "1160", "9541"].map((img, idx) => (
              <div key={idx} className="gallery-item gallery-item-large">
                <img
                  src={`https://images.unsplash.com/photo-15${img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80`}
                  alt="Masterclass"
                />
                <div className="gallery-caption">Caption {idx + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Format */}
      <section className="masterclass-content">
        <div className="container">
          <div className="content-box">
            <h2>About This Masterclass</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
              [trimmed for brevity]
            </p>

            <div className="format-section">
              <h3>Course Format</h3>
              <div className="format-steps">
                <div className="format-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Theoretical Foundation</h4>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                  </div>
                </div>
                <div className="format-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Practical Demonstrations</h4>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-card">
            <h2>Join This Masterclass</h2>
            <div className="price">$599</div>
            <p className="price-note">One-time payment for full day training</p>
            <a href="#" className="register-btn">
              Register Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterclassDetail;
