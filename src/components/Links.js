import linksImg from "../assets/images/links.jpeg";

function Links(props) {
  return (
    <>
      <main class="d-f@lrg g fg-1 p">
        <div class="fg-4@lrg g">
          <a id="linkedin_badge">
            <h2 class="ta-c ff-fantasy fw-700 td-u fz-2">Links</h2>
          </a>
          <section class="bgc-gr2 d-f@lrg p+">
            <div class="fx-1">
              <img
                class="w-100 ai-c@min"
                src={linksImg}
                alt="A keyboard with the word LINKS across the keys"
              />
            </div>
            <div class="fx-1 pl c-white ai-c@min">
              <h3 class="d-f pb">See more projects or contact me:</h3>
              <p class="d-f\@lrg pb">
                <h4>Link to my:</h4>
                <a href="https://github.com/smarr2198">
                  <button
                    type="button"
                    class="btn btn-secondary hover mr "
                    id="moreProjects"
                  >
                    Github
                  </button>
                </a>
              </p>
              <p class="d-f\@lrg pb">
                <h4>Send me an Email:</h4>
                <a href="mailto:smarr2198@gmail.com">
                  <button
                    type="button"
                    class="btn btn-secondary hover mr "
                    id="moreProjects"
                  >
                    smarr2198@gmail.com
                  </button>
                </a>
              </p>
              <p class="d-f\@lrg">
                <h4>Link to my:</h4>
                <a href="https://www.linkedin.com/in/stephen-marr-b15b74225/">
                  <button
                    type="button"
                    class="btn btn-secondary hover mr "
                    id="moreProjects"
                  >
                    LinkedIn
                  </button>
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Links;
