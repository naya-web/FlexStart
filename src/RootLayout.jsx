import { Outlet } from "react-router-dom"
import NavBar from "./Components/allComponents/NavBar/NavBar"
import NewsLetter from "./Container/NewsLetter/NewsLetter"
import Footer from "./Container/Footer/Footer"

function RootLayout() {
	return (
    <>
    <NavBar/>
    <main>
      <Outlet/>
    </main>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default RootLayout