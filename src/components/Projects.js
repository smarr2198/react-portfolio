import noteTaker from "../assets/images/noteTakerPage.png";
import mvcImage from "../assets/images/MVCscreenshot.png";
import TeamProfileGenerator from "../assets/images/TeamProfileGenerator.png";
import weatherAppPic from "../assets/images/weatherAppPic.png";

function Projects(props) {
  return (
    <>
      <body class="bgc-lightgray d-f fxd-c h-100vh mw-60">
        <h2 class="ta-c ff-fantasy fw-700 td-u mt fz-2">Projects</h2>

        <section class="bgc-gr2 mt d-f@lrg p+">
          <div class="fx-1">
            <img
              class="w-100 ai-c@min"
              src={mvcImage}
              alt="Screenshot of my JS project that is on github"
            ></img>
          </div>
          <div class="fx-1 pl c-white">
            <p>
              This is a model view controller application that represents a Tech
              Blog. Users are able to sign up/log in and can make posts that
              will display on the homepage of our website. From there a user can
              view all posts from the website and navigate into a post where
              they can create comments that every user will be able to view. if
              a user wants to take down their self created post they are able to
              delete it from their profile page.
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
          </div>
        </section>
        <section class="bgc-gr2 mt d-f@lrg proj-w@lrg ml-proj@lrg p+">
          <div class="fx-1">
            <img
              class="w-100 ai-c@min p-t-s"
              src={noteTaker}
              alt="A Folder filled with papers"
            />
          </div>
          <div class="fx-1 pl c-white">
            <p>
              This is a Note Taker application that uses Node.JS and Express.JS.
              The note taker will start off blank and you can create a title for
              your note/reminder and then enter the text underneath. Once your
              note is made you can save it and it will be stored in a list on
              the left side of the webpage. You can view your notes again by
              clicking in the list on the title of the note you would like to
              view. There is also a functional delete button that will let you
              delete your notes from the database.
            </p>
            <p class="mt">
              Link to this Github reposiotry:{" "}
              <a href="https://github.com/smarr2198/noteTaker">
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
              Link to the hosted Heroku Server:{" "}
              <a href="https://note-taker-smarr2198.herokuapp.com/notes">
                <button
                  type="button"
                  class="btn btn-secondary hover mr "
                  id="moreProjects"
                >
                  Heroku
                </button>
              </a>
            </p>
          </div>
        </section>

        <section class="bgc-gr2 mt d-f@lrg proj-w@lrg ml-proj@lrg p+">
          <div class="fx-1">
            <img
              class="w-100 ai-c@min p-t-s"
              src={TeamProfileGenerator}
              alt="A Folder filled with papers"
            />
          </div>
          <div class="fx-1 pl c-white">
            <p>
              this is an app that uses node.js and asks for user input through
              the command line. A user is asked to fill out information for a
              team of engineers, manager, and an intern. You can assign an ID
              number and an email to every worker. Once all workers are entered
              it will generate an HTML page that displays your work team in
              individual cards with their related information.
            </p>
            <p class="mt">
              Link to this Github reposiotry:{" "}
              <a href="https://github.com/smarr2198/TeamProfileGenerator">
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
              Link to the hosted github page:{" "}
              <a href="https://smarr2198.github.io/TeamProfileGenerator/">
                <button
                  type="button"
                  class="btn btn-secondary hover mr "
                  id="moreProjects"
                >
                  Pages
                </button>
              </a>
            </p>
          </div>
        </section>

        <section class="bgc-gr2 mt d-f@lrg proj-w@lrg ml-proj@lrg p+">
          <div class="fx-1">
            <img
              class="w-100 ai-c@min p-t-s"
              src={weatherAppPic}
              alt="A Folder filled with papers"
            />
          </div>
          <div class="fx-1 pl c-white">
            <p>
              This application is a weather app where you can search a specific
              city and it will show a current day result with Temperature,
              humidity, wind speeds, and UV Index. Below it will show results of
              a 5 day forecast with the same information in each box.
            </p>
            <p class="mt">
              Link to this Github reposiotry:{" "}
              <a href="https://github.com/smarr2198/weatherApp">
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
              Link to the hosted github page:{" "}
              <a href="https://smarr2198.github.io/weatherApp/">
                <button
                  type="button"
                  class="btn btn-secondary hover mr "
                  id="moreProjects"
                >
                  Pages
                </button>
              </a>
            </p>
          </div>
        </section>
      </body>
    </>
  );
}

export default Projects;
