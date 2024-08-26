import logoBike from '../assets/svg/logo_nav_bike.svg';
import logoPullUp from '../assets/svg/logo_nav_pull_up';
import logoSportSee from '../assets/svg/logo_nav_sport_see';
import logoSwim from '../assets/svg/logo_nav_swim.svg';
import logoZen from '../assets/svg/logo_nav_zen.svg';
import logoMenu from '../assets/svg/menu.svg';

const NavBar = () => {
  return (
    <>
      <nav className="container_nav_vertical">
        <div className="container_column">
          <img className="logo_nav_vertical" src={logoZen} alt="Zen" />
          <img className="logo_nav_vertical" src={logoSwim} alt="Nager" />
          <img className="logo_nav_vertical" src={logoBike} alt="Vélo" />
          <img className="logo_nav_vertical" src={logoPullUp} alt="Haltère" />
        </div>
        <p className="cp">Copiryght, SportSee 2020</p>
      </nav>
      <header className="container_nav_horizontal">
        <div className="container_row">
          <img className="logo_sport_see" src={logoSportSee} alt="SportSee" />

          {/* Icône du menu burger */}
          <div className="burger_menu">
            <img src={logoMenu} alt="Menu" className="burger_icon" />
          </div>

          {/* Liens de navigation */}
          <nav className="nav_links">
            <a href="#" className="nav_link">
              Accueil
            </a>
            <a href="#" className="nav_link">
              Profil
            </a>
            <a href="#" className="nav_link">
              Réglage
            </a>
            <a href="#" className="nav_link">
              Communauté
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
