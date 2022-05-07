import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Projects from "./Projects";

function Layout(props) {
  return (
    <>
      <main>
        <Body></Body>
      </main>

      {/* <main>{props.children}</main> */}
    </>
  );
}

export default Layout;
