import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div className='Header'>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <Link to={"/"} className="nav-brand">
              VIRODS
            </Link>
            <div className="nav-menu-wrapper">
              <div className="navbar-menu-header">
                <p className="navbar-menu-title">Menu</p>
                <Link to={"/"} data-dismiss="navbar-menu" className="navbar-menu-close">&times;</Link>
              </div>
              <ul className="nav-menu">
                <li><Link to={"/"} data-toggle="navbar-submenu" data-target="#tour">Tour <i className="ri-arrow-down-s-line"></i></Link>
                  <div className="navbar-submenu-wrapper">
                    <div className="navbar-submenu-menu-wrapper" id="tour">
                      <div className="navbar-submenu-header">
                        <Link to={"/"} data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</Link>
                        <Link to={"/"} data-dismiss="navbar-menu" className="navbar-menu-close">&times;</Link>
                      </div>
                      <ul className="navbar-submenu-menu" >
                        <li><Link to={"/"} className="active" data-toggle="navbar-submenu-content navbar-submenu" data-target="#tour-india">Europe <i className="ri-arrow-right-s-line"></i></Link></li>
                        <li><Link to={"/"} data-toggle="navbar-submenu-content navbar-submenu" data-target="#tour-sri">Asia <i className="ri-arrow-right-s-line"></i></Link></li>
                        <li><Link to={"/"} data-toggle="navbar-submenu-content navbar-submenu" data-target="#tour-japan">Viza <i className="ri-arrow-right-s-line"></i></Link></li>
                      </ul>
                    </div>
                    <div className="navbar-submenu-content-wrapper active" id="tour-india">
                      <div className="navbar-submenu-header">
                        <Link to={"/"} data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</Link>
                        <Link to={"/"} data-dismiss="navbar-menu" className="navbar-menu-close">&times;</Link>
                      </div>
                      <div className="navbar-submenu-content-title">Europe</div>
                      <ul className="navbar-submenu-content" id="">
                        <li><Link to={"/"}>England</Link></li>
                        <li><Link to={"/"}>Italy</Link></li>
                        <li><Link to={"/"}>Norway</Link></li>
                        <li><Link to={"/"}>Hungary</Link></li>
                        <li><Link to={"/"}>Spanish</Link></li>
                        <li><Link to={"/"}>Bulgaria</Link></li>
                        <li><Link to={"/"}>Switzerland</Link></li>
                        <li><Link to={"/"}>Swiden</Link></li>
                        <li><Link to={"/"}>Austria</Link></li>
                        <li><Link to={"/"}>Germany</Link></li>
                        <li><Link to={"/"}>Poland</Link></li>
                        <li><Link to={"/"}>Portugal</Link></li>
                      </ul>
                    </div>
                    <div className="navbar-submenu-content-wrapper" id="tour-sri">
                      <div className="navbar-submenu-header">
                        <Link to={"/"} data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</Link>
                        <Link to={"/"} data-dismiss="navbar-menu" className="navbar-menu-close">&times;</Link>
                      </div>
                      <div className="navbar-submenu-content-title">Asia</div>
                      <ul className="navbar-submenu-content">
                        <li><Link to={"/"}>Dubai</Link></li>
                        <li><Link to={"/"}>China</Link></li>
                        <li><Link to={"/"}>Twailand</Link></li>
                        <li><Link to={"/"}>Australia</Link></li>
                        <li><Link to={"/"}>Azarbaijan</Link></li>
                        <li><Link to={"/"}>Singapore</Link></li>
                        <li><Link to={"/"}>Indonesia</Link></li>
                        <li><Link to={"/"}>Turkia</Link></li>
                        <li><Link to={"/"}>Georgia</Link></li>
                        <li><Link to={"/"}>Malaysia</Link></li>
                        <li><Link to={"/"}>Saudia Arabia</Link></li>
                        <li><Link to={"/"}>Japan</Link></li>
                      </ul>
                    </div>
                    <div className="navbar-submenu-content-wrapper" id="tour-japan">
                      <div className="navbar-submenu-header">
                        <Link to={"/"} data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</Link>
                        <Link to={"/"} data-dismiss="navbar-menu" className="navbar-menu-close">&times;</Link>
                      </div>
                      <div className="navbar-submenu-content-title">Viza</div>
                      <ul className="navbar-submenu-content">
                        <li><Link to={"/"}>America</Link></li>
                        <li><Link to={"/"}>France</Link></li>
                        <li><Link to={"/"}>China</Link></li>
                        <li><Link to={"/"}>Moscow</Link></li>
                        <li><Link to={"/"}>London</Link></li>
                        <li><Link to={"/"}>Indonesia</Link></li>
                        <li><Link to={"/"}>Poland</Link></li>
                        <li><Link to={"/"}>Japan</Link></li>
                        <li><Link to={"/"}>Litva</Link></li>
                        <li><Link to={"/"}>Latvia</Link></li>
                        <li><Link to={"/"}>Hungary</Link></li>
                        <li><Link to={"/"}>Saudia Arabia</Link></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li><Link to={"/packages"}>Packages</Link></li>
                <li><Link to={"/Contact"}>Contact Us</Link></li>
              </ul>
            </div>
            <Link to={"/"} className="navbar-toggle">
              <i className="ri-menu-line"></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
