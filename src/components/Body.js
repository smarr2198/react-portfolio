import parisImage from "../assets/images/meInParis1.webp";
import mvcImage from "../assets/images/MVCscreenshot.png";

function Body(props) {
  return (
    <>
      <body class="d-f fxd-c h-100vh sideBody@lrg pl">
        <main class="d-f@lrg ai-c mr fg-1 ">
          <div class="fg-4@lrg">
            <h2 class="ta-c ff-fantasy fw-700 mt c-blue td-u fz-2">About Me</h2>

            <section class="bgc-gr2 d-f@lrg p+">
              <div class="fx-1">
                <img
                  class="w-100 ai-c@min"
                  src={parisImage}
                  alt="me in Paris"
                />
              </div>
              <div class="fx-1 pl c-white">
                <p>
                  {" "}
                  My Name is Stephen Marr. I graduated from Illinois State
                  University with a Computer System Technology (CST) degree in
                  May of 2021. At school i learned an abundance of topics
                  including, Networking, Server Management, Project Management,
                  and Development. While i was in my software development
                  courses I fell in love with it. I quickly realized this is
                  what i want my future to be. I am currently taking a web
                  development bootcamp through northwestern university to
                  jumpstart my career.
                </p>
                <p>
                  {" "}
                  One of my favorite things to do outside of class is play
                  videogames. When i was young videogames is what drove me to
                  take a career in computers and established that initial
                  interest in how computer work and how softwares run.
                </p>
              </div>
            </section>

            <h2 class="ta-c ff-fantasy fw-700 c-blue p-t td-u fz-2">
              Featured Project
            </h2>
            <section class="bgc-gr2 mt d-f@lrg p+">
              <div class="fx-1 c-white ta-c">
                <img
                  class="w-100 ai-c@min"
                  src={mvcImage}
                  alt="Screenshot of my JS project that is on github"
                ></img>

                <p class="mt">
                  This is a model view controller application that represents a
                  Tech Blog. Users are able to sign up/log in and can make posts
                  that will display on the homepage of our website. From there a
                  user can view all posts from the website and navigate into a
                  post where they can create comments that every user will be
                  able to view. if a user wants to take down their self created
                  post they are able to delete it from their profile page.
                </p>
                <p class="mt">
                  Link to this Github reposiotry:{" "}
                  <a href="https://github.com/smarr2198/model-view-controller">
                    <button
                      type="button"
                      class="btn btn-secondary hover mr "
                      id="moreProjects"
                    >
                      Repository
                    </button>
                  </a>
                </p>
                <p class="mt">
                  Link to the hosted Heroku server:{" "}
                  <a href="https://smarr-model-view-controller.herokuapp.com/">
                    <button
                      type="button"
                      class="btn btn-secondary hover mr "
                      id="moreProjects"
                    >
                      Heroku
                    </button>
                  </a>
                </p>

                <a href="/projects">
                  <button
                    type="button"
                    class="btn btn-secondary w-100 mt hover"
                    id="moreProjects"
                  >
                    More Projects
                  </button>
                </a>
              </div>
            </section>
          </div>
        </main>
      </body>
    </>
  );
}

export default Body;
