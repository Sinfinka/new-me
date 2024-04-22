import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import css from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
