import React from "react"
import NavBar from "./NavBar"
import "./styles.css"
// import "./scripts"
import Header from "./Header"
import PortfolioSection from "./PortfolioSection"
// import Portfolio from "./Portfolio"
import About from "./About";
import PortfolioModals from "./PortfolioModals"
import Contact from "./Contact"
import Footer from "./Footer"

const App = ()=>(
    <div>
   <NavBar />
   <Header />
   <PortfolioSection />
   <PortfolioModals/>
   <About />
   <Contact/>
   <Footer />
   </div>
);

export default App;