import React from "react";
import github from '../svg/github-logo.svg';

const Header = () => 
    <header className="bg-blue-600 p-4">
        <h1 className="text-2xl">Weather App</h1>
    </header>


const Footer = () =>
    <footer className="bg-blue-600 text-white text-center py-2">
      <h3 className="text-sm sm:text-base">Made with <span role="img" aria-label="love">❤️</span> by Sebastián Leal, 2020</h3>
      <nav className="flex justify-center my-2">
        <a href="https://github.com/achilleleal/weather-app">
          <img src={github} className="w-8 duration-300 transform hover:scale-110"/>
        </a>
      </nav>
    </footer>


const Layout = ({ children }) => 
    <div className="App text-white">
        <Header />
            <main className="App-header">
                {children}
            </main>
        <Footer />
    </div>


export default Layout;