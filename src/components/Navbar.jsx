import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, navLinksSpanish } from "../constants";
import { logo, menu, close, en, es } from "../assets";
import { lan } from "../constants/language";

const Navbar = ({ language, setLanguage }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const changeLanguage = async (data) => {
    setLanguage(data);
  };

  const handleLanguage = (e) => {
    changeLanguage(e.target.parentElement.dataset.languaje);
  };

  const mapLinks = (linksArray) => {
    return linksArray.map((link) => (
      <li
        key={link.id}
        className={`${
          active === link.title ? "text-white" : "text-secondary"
        } hover:text-white text-[18px] font-medium cursor-pointer`}
        onClick={() => setActive(link.title)}
      >
        <a href={`#${link.id}`}>{link.title}</a>
      </li>
    ));
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Link de la imagen y texto para que diriga a oagina principal */}
        {/* ----------------------------------------------- */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); //va a hacer que se escrolee al top de la pantalla
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Nemecio &nbsp; <span className="sm:block hidden">| Portafolio</span>
          </p>
        </Link>

        {/* botones de navegacion en la parte derecha del navbar */}
        {/* ----------------------------------------------- */}
        <ul className="list-none hidden md:flex flex-row gap-10">
          <div id="flags" className="flags">
            <div className="flags__item" data-languaje="es">
              <img
                src={es}
                alt=""
                onClick={(e) => {
                  handleLanguage(e);
                }}
              />
            </div>
            <div className="flags__item" data-languaje="en">
              <img
                src={en}
                alt=""
                onClick={(e) => {
                  handleLanguage(e);
                }}
              />
            </div>
          </div>

          {language === lan.ES ? mapLinks(navLinksSpanish) : mapLinks(navLinks)}
        </ul>

        {/* Opcion donde se comprimen los botones de navegacion en small deivices */}
        {/* ----------------------------------------------- */}

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <div id="flags" className="flags">
                <div className="flags__item" data-languaje="es">
                  <img
                    src={es}
                    alt=""
                    onClick={(e) => {
                      handleLanguage(e);
                    }}
                  />
                </div>
                <div className="flags__item" data-languaje="en">
                  <img
                    src={en}
                    alt=""
                    onClick={(e) => {
                      handleLanguage(e);
                    }}
                  />
                </div>
              </div>
              {language === lan.ES
                ? navLinksSpanish.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setActive(link.title);
                        setToggle(!toggle);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))
                : navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setActive(link.title);
                        setToggle(!toggle);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
