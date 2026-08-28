import "./Navbar.css";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="navbar-container">

        <div className="navbar-logo">

          <span>N</span>
          <span className="heart">♡</span>
          <span>S</span>

        </div>

        <ul className="navbar-menu">

          <li>
            <a href="#hero">
              Hero
            </a>
          </li>


          <li>
            <a href="#invitation">
              Invitation
            </a>
          </li>


          <li>
            <a href="#couple">
              Couple
            </a>
          </li>


          <li>
            <a href="#events">
              Events
            </a>
          </li>


          <li>
            <a href="#gallery">
              Gallery
            </a>
          </li>


          <li>
            <a href="#rsvp">
              RSVP
            </a>
          </li>


        </ul>

        <button className="navbar-btn">

          Save Date

        </button>


      </div>

    </nav>

  );

}


export default Navbar;