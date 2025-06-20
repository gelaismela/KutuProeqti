import { Link } from "react-router-dom";
import logo from "../logos/logo_transparent_background.png";
import "../styles/List.css"; // This should be the updated namespaced version

const masterclasses = [
  {
    id: 1,
    dateRange: "06–07",
    month: "JUNE",
    location: "📍 Tbilisi",
    title: 'Practical course "Surgical navigation in RealGuide from scratch"',
    type: "Practical course",
    lecturer: "Denisov Denis Alexandrovich",
    audience: "To the dentist, Dental technician, Digital Dentistry",
  },
  {
    id: 2,
    dateRange: "23–27",
    month: "JUNE",
    location: "📍 Tbilisi",
    title:
      "Manufacturing of crowns and bridges. Metal ceramics VITA VMK Master",
    type: "Practical course",
    lecturer: "Malyuchenko Sergey Alexandrovich",
    audience: "Dental technician, Metal ceramics",
  },
  {
    id: 3,
    dateRange: "30–01",
    month: "JUNE–JULY",
    location: "📍 Tbilisi",
    title: "TRG for orthopedists",
    type: "Practical course",
    lecturer: "Ermoshenko Roman Borisovich",
    audience: "To the dentist, Gnathology, morphology",
  },
];

const MasterclassList = () => {
  return (
    <div className="ml-list">
      {/* Navbar */}
      <nav className="ml-navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link to="/" className="ml-navbar-brand">
            <img src={logo} alt="Logo" />
            <span>Dental Academy </span>Georgia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="ml-nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="ml-nav-link active" to="/masterclasses">
                  Masterclasses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="ml-nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="ml-nav-link" to="/">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="ml-nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
            <a href="#registration" className="ml-btn-primary ms-lg-4">
              Register Now
            </a>
          </div>
        </div>
      </nav>

      {/* Masterclasses Section */}
      <section id="ml-masterclass-list" className="py-5 mt-5">
        <div className="container">
          <h2 className="text-center mb-4">All Courses</h2>

          <div className="ml-search-bar mb-4">
            <input type="text" placeholder="Search" />
            <span className="ml-search-icon">🔍</span>
          </div>

          <h4 className="ml-masterclass-month mb-3">JUNE 2025</h4>

          {masterclasses.map((item) => (
            <Link
              to={`/masterclasses/${item.id}`}
              key={item.id}
              className="ml-masterclass-item"
            >
              <div className="ml-date-block">
                <span className="ml-date-range">{item.dateRange}</span>
                <span className="ml-month">{item.month}</span>
                <span className="ml-location">{item.location}</span>
              </div>
              <div className="ml-details-block">
                <h5>{item.title}</h5>
                <p className="ml-type">{item.type}</p>
                <p className="ml-lecturer">{item.lecturer}</p>
                <p className="ml-audience">{item.audience}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MasterclassList;
