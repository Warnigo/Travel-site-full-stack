import bg from "../../assets/images/mohammed-bg.jpg";
import bg1 from "../../assets/images/river-bg.webp"
import bg2 from "../../assets/images/way-bg.jpg"
import { Link } from 'react-router-dom';

const HomeP = () => {

  
  return (
    <section id="section-1">
      <header>
        <div className="container">
          <div className="header-image">
            <img className="active" src={bg2}  alt="carousel" />
            <img src={bg1} alt="carousel" />
            <img src={bg} alt="carousel" />
          </div>
          <div className="header-wrapper">
            <h2 className="header-title">Discover the world one adventure at a time</h2>
            <p className="header-description">Discover the world with tour. Explore new destinations and book your next tour today.</p>
            <form className="header-form">
              <input type="text" placeholder="Search for your adventure..." />
              <button className="btn"><i className="ri-search-line"></i> Search</button>
            </form>
          </div>
          <div className="header-image-indicator">
            <Link to={""} className="active"></Link>
            <Link to={""}></Link>
            <Link to={""}></Link>
          </div>
        </div>
      </header>
    </section>
  );
};

export default HomeP;
