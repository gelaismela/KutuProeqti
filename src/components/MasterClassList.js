import { Link } from "react-router-dom";
import "../styles/list.css";

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
    <section id="masterclass-list" className="py-5 mt-5">
      <div className="container">
        <h2 className="text-center mb-4">All Courses</h2>

        <div className="search-bar mb-4">
          <input type="text" placeholder="Search" />
          <span className="search-icon">🔍</span>
        </div>

        <h4 className="mb-3">JUNE 2025</h4>

        {masterclasses.map((item) => (
          <Link
            to={`/masterclasses/${item.id}`}
            key={item.id}
            className="masterclass-item"
          >
            <div className="date-block">
              <span className="date-range">{item.dateRange}</span>
              <span className="month">{item.month}</span>
              <span className="location">{item.location}</span>
            </div>
            <div className="details-block">
              <h5>{item.title}</h5>
              <p className="type">{item.type}</p>
              <p className="lecturer">{item.lecturer}</p>
              <p className="audience">{item.audience}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MasterclassList;
