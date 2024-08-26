const NavBar = () => {
  return (
    <>
      <nav className="container_nav_vertical">
        <div className="container_column">
          <img
            className="logo_nav_vertical"
            src="./assets/svg/logo_nav_zen.svg"
          />
          <img
            className="logo_nav_vertical"
            src="./assets/svg/logo_nav_swim.svg"
          />
          <img
            className="logo_nav_vertical"
            src="./assets/svg/logo_nav_bike.svg"
          />
          <img
            className="logo_nav_vertical"
            src="./assets/svg/logo_nav_pull_up.svg"
          />
        </div>
        <p className="cp">Copiryght, SportSee 2020</p>
      </nav>
      <header className="container_nav_horizontal">
        <div className="container_row">
          <img
            className="logo_sport_see"
            src="./assets/svg/logo_nav_sport_see.svg"
            alt="SportSee"
          />

          {/* Icône du menu burger */}
          <div className="burger_menu">
            <img
              src="./assets/svg/menu.svg"
              alt="Menu"
              className="burger_icon"
            />
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
