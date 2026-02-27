import css from './Layout.module.scss';
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={css.container}>{children}</main>
      <Footer />
    </>

  )
}; 