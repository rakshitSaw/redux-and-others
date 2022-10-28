import Logo from "../../images/logo/Netflix_Symbol_RGB.png";

function Navbar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={Logo} alt="Bootstrap" width="40" height="45"></img>
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/home">
                Home
              </a>
              <a class="nav-link" href="/reduxExample">
                Redux
              </a>
              <a class="nav-link" href="/examples">
                Examples
              </a>
              <a class="nav-link" href="/others">
                Others
              </a>
              <a class="nav-link" href="/aboutMe">
                About Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
