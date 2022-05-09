import reactLogo from "../assets/images/reactLogo.png";

function Header(props) {
  return (
    <>
      <header>
        <nav class="ai-c bgc-gr1 d-f@lrg fx-c@lrg jc-sb ta-c p sideNav@lrg">
          <div class="ff-fantasy fw-700 fz-2 c-white jc-s">
            <img
              class="picSize@min ai-c@min"
              src={reactLogo}
              alt="me in Paris"
            />
          </div>
          <div>
            <a href="/">
              <button
                type="button"
                class="btn btn-secondary hover w-100 cricleBtn"
                id="moreProjects"
              >
                About Me
              </button>
            </a>
            <br />
            <br />

            <a href="/projects">
              <button
                type="button"
                class="btn btn-secondary hover w-100 cricleBtn"
                id="moreProjects"
              >
                Projects
              </button>
            </a>
            <br />
            <br />

            <a href="/Links">
              <button
                type="button"
                class="btn btn-secondary hover w-100 cricleBtn"
                id="moreProjects"
              >
                Links
              </button>
            </a>
          </div>
          <div class="ff-fantasy fw-700 mt fz-2 c-blue jc-s">
            <p>Stephen Marr</p>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
