import css from './Layout.module.scss';
import Header from "../Header/Header.jsx"
import { Outlet } from 'react-router-dom';
import Footer from "../Footer/Footer.jsx"

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={css.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}; 