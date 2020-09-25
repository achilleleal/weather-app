import React from "react";
import github from '../svg/github-logo.svg';

const Footer = () =>
    <footer className="bg-blue-900 text-white text-center pt-4 pb-2">
      <h3 className="text-sm sm:text-base">Made with <span role="img" aria-label="love">❤️</span> by Sebastián Leal, 2020</h3>
      <nav className="flex justify-center my-2">
        <a href="https://github.com/achilleleal/weather-app">
          <img src={github} alt="github" className="w-8 duration-300 transform hover:scale-110"/>
        </a>
      </nav>
    </footer>


const Layout = ({ children }) => 
    <>
        <main className="flex justify-center items-center text-center text-white">
            {children}
        </main>
        <Footer />
    </>


export default Layout;