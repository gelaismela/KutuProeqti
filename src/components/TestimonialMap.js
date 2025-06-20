const TestimonialMapSelection = () => {
  return (
    <section className="card-section">
      <div className="container">
        <div className="row g-4">
          {/* Testimonials Card */}
          <div className="col-lg-6">
            <div className="card-style testimonial-card">
              <h3 className="section-title">What Our Alumni Say</h3>
              <div className="testimonial-content">
                <p>
                  The Advanced Implantology masterclass completely changed my
                  approach to implant placement. The hands-on training was
                  exceptional, and I've already implemented several techniques
                  that have improved my success rates.
                </p>
              </div>
              <div className="testimonial-author d-flex align-items-center gap-3 mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Dr. James Wilson"
                  style={{ width: "60px", borderRadius: "50%" }}
                />
                <div>
                  <h4 className="author-name mb-0">Dr. James Wilson</h4>
                  <p className="author-title">General Dentist, Miami</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="col-lg-6">
            <div className="card-style map-card">
              <h3 className="section-title">Visit Our Training Center</h3>
              <iframe
                title="Training Center Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.665575273758!2d-71.08408348454403!3d42.34997997918783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0e8c5535ef%3A0xa3a5e1f511238472!2s123%20Dental%20Ave%2C%20Boston%2C%20MA%2002115%2C%20USA!5e0!3m2!1sen!2s!4v1623861234567!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                style={{ width: "100%", height: "250px", border: 0 }}
              ></iframe>
              <div className="map-info mt-3">
                <p>
                  <i className="fas fa-map-marker-alt"></i> 123 Dental Avenue,
                  Suite 400
                  <br />
                  Boston, MA 02115
                </p>
                <p>
                  <i className="fas fa-phone"></i> +1 (617) 555-0123
                </p>
                <p>
                  <i className="fas fa-envelope"></i>{" "}
                  education@dentalexcellence.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialMapSelection;
