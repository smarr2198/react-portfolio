function Header(props) {
  return (
    <>
      <header>
        <nav class="ai-c bgc-gr1 d-f@lrg jc-sb p">
          <div class="ff-fantasy fw-700 fz-2 c-white jc-s">
            <p>Stephen Marr</p>
            <p>React Portfolio</p>
          </div>
          {/* <div class="ff-fantasy fw-700 fz-2 c-white">React Portfolio</div> */}
          {/* <div class="c-white fw-700 fz-1 mr">
            <a href="/" class="mr">
              About Me
            </a>
            <a href="/projects">Projects</a>
          </div> */}
          <div>
            <a href="/">
              <button
                type="button"
                class="btn btn-secondary hover mr "
                id="moreProjects"
              >
                About Me
              </button>
            </a>
            <a href="/projects">
              <button
                type="button"
                class="btn btn-secondary hover mr "
                id="moreProjects"
              >
                Projects
              </button>
            </a>
            <a href="/Links">
              <button
                type="button"
                class="btn btn-secondary hover"
                id="moreProjects"
              >
                Links
              </button>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
